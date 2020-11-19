import { Request, Response } from "express";
import { MovieRepository } from "../../movies/repositories/MovieRepository";
import { RentRepository } from "../repositories/RentRepository";

export const rentMovie = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id, name } = req.body["user"];
    const { movieId } = req.body;

    if (!id || !movieId || !name) {
      return res.status(403).json({ message: "Missing resources" });
    }

    const movieRepository = new MovieRepository();

    const movies = await movieRepository.retrieve({
      attribute: "id",
      value: movieId,
    });

    if (movies instanceof Error) {
      return res.status(400).json({ message: movies.message });
    }

    if (movies[0].amount === 0) {
      return res.status(400).json({ message: "Unavailable to rent" });
    }

    const updated = await movieRepository.update({
      id: movies[0].id,
      amount: movies[0].amount - 1,
    });

    if (updated instanceof Error) {
      return res.status(400).json({ message: updated.message });
    }

    const rentRepository = new RentRepository();

    const rent = await rentRepository.create({
      movie_id: movieId,
      user_id: id,
    });

    if (rent instanceof Error) {
      return res.status(400).json({ message: rent.message });
    }

    return res
      .status(200)
      .json({ message: `${movies[0].title} rented!`, name });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
