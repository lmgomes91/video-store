import { Request, Response } from "express";
import { MovieRepository } from "../../movies/repositories/MovieRepository";
import { IRentMovie } from "../dtos/IRentMovieDTO";
import { RentRepository } from "../repositories/RentRepository";

export const rentMovie = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { devolution, movieId }: IRentMovie = req.body;
    const user = req.body.user;

    if (!user || !movieId) {
      return res.status(403).json({ message: "Missing resources" });
    }

    const movieRepository = new MovieRepository();

    const movies = await movieRepository.retrieve({
      id: movieId,
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
      user_id: user.id,
      devolution: devolution,
    });

    if (rent instanceof Error) {
      return res.status(400).json({ message: rent.message });
    }

    return res.status(200).json({ message: `${movies[0].title} rented!` });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
