import { Request, Response } from "express";
import { MovieRepository } from "../../movies/repositories/MovieRepository";
import { RentRepository } from "../repositories/RentRepository";

export const returnMovie = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { movieId } = req.body;

    const userId = req.body.user.id;

    if (!userId || !movieId) {
      return res.status(403).json({ message: "Missing resources" });
    }

    const rentRepository = new RentRepository();

    const rents = await rentRepository.retrieve({
      user_id: userId,
    });

    if (rents instanceof Error) {
      return res.status(400).json({ message: "User has no movies rented" });
    }

    const rent = rents.find((rent) => rent.movie_id == movieId);

    if (!rent) {
      return res
        .status(400)
        .json({ message: "User does not have this movie rented" });
    }

    const deleted = rentRepository.delete(rent.id);

    if (!deleted) {
      return res
        .status(400)
        .json({ message: "Failed to confirm return of the movie" });
    }

    const movieRepository = new MovieRepository();

    const movie = await movieRepository.retrieve({
      id: movieId,
    });

    if (movie instanceof Error) {
      return res.status(400).json({
        message: "Failed to retrieve movie to update quantity in stock",
      });
    }

    const updated = await movieRepository.update({
      id: movie[0].id,
      amount: movie[0].amount + 1,
    });

    if (updated instanceof Error) {
      return res.status(400).json({
        message: "Failed to update movie quantity in stock",
      });
    }

    return res.status(200).json({
      mesage: `${updated.title} returned`,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
