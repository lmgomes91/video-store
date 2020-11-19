import { Request, Response } from "express";
import { ICreateMovie } from "../dtos/ICreateMovieDTO";
import { MovieRepository } from "../repositories/MovieRepository";

export const createMovie = async (req: Request, res: Response) => {
  try {
    const { amount, director, title }: ICreateMovie = req.body;

    if (!amount || !director || !title) {
      return res.status(403).json({ message: "Missing resources" });
    }

    const movieRepository = new MovieRepository();

    const movie = await movieRepository.create({ amount, director, title });

    if (movie instanceof Error) {
      return res.status(400).json({ message: "Failed to create movie" });
    }

    return res.status(200).json({ movie });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
