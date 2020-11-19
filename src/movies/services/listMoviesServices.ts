import { Request, Response } from "express";
import Movie from "../entities/Movie";
import { MovieRepository } from "../repositories/MovieRepository";

export const listMovies = async (req: Request, res: Response) => {
  try {
    const { name } = req.body["user"];

    const attribute = <string>req.query["attribute"] || null;
    const value = <string | number>req.query["value"] || null;

    const movieRepository = new MovieRepository();
    let movies: Movie[] | Error;

    if (attribute && value) {
      movies = await movieRepository.retrieve({ attribute, value });
    } else if (!attribute && !value) {
      movies = await movieRepository.retrieve();
    } else {
      return res.status(403).json({ message: "Missing resources" });
    }

    if (movies instanceof Error) {
      return res.status(400).json({ message: movies.message });
    }

    return res.status(200).json({ movies, name });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
