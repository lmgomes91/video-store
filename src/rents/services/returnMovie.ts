import { Request, Response } from "express";
import { MovieRepository } from "../../movies/repositories/MovieRepository";
import { RentRepository } from "../repositories/RentRepository";

export const returnMovie = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id, name } = req.body["user"];
    const { movieId } = req.body;

    if (!id || !movieId || !name) {
      return res.status(403).json({ message: "Missing resources" });
    }

    const rentRepository = new RentRepository();

    const rents = await rentRepository.retrieve({
      attribute: "user_id",
      value: id,
    });

    if (rents instanceof Error) {
      return res.status(400).json({ message: "User has no movies rented" });
    }

    const rent = rents.filter((rent) => rent.movie_id == movieId);

    if (rent.length === 0) {
      return res
        .status(400)
        .json({ message: "User does not have this movie rented" });
    }

    const deleted = rentRepository.delete(rent[0].id);

    if (!deleted) {
      return res
        .status(400)
        .json({ message: "Failed to confirm return of the movie" });
    }

    const movieRepository = new MovieRepository();

    const movie = await movieRepository.retrieve({
      attribute: "id",
      value: movieId,
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
      name,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
