import { Request, Response } from "express";
import Movie from "../entities/Movie";
import { MovieRepository } from "../repositories/MovieRepository";

export const listMovies = async (req: Request, res: Response) => {
  try {
    const query = req.query;

    const movieRepository = new MovieRepository();
    let movies: Movie[] | Error;

    if (!query) {
      movies = await movieRepository.retrieve();
    } else {
      movies = await movieRepository.retrieve(query);
    }

    if (movies instanceof Error) {
      return res.status(400).json({ message: movies.message });
    }
    
    return res.status(200).json({ movies });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
