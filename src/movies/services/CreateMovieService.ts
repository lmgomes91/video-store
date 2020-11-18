import { Request, response, Response } from "express";
import { ICreateMovie } from "../dtos/ICreateMovieDTO";
import { MovieRepository } from "../repositories/MovieRepository";

export const createMovie = async (req: Request, res: Response) => {
  const { amount, director, title }: ICreateMovie = req.body;

  if (!amount || !director || !title) {
    return res.status(403).json({ message: "Missing resources" });
  }

  const movieRepository = new MovieRepository();

  const movie = await movieRepository.create({ amount, director, title });

  if (movie instanceof Error) {
    return response.status(400).json({ message: "Failed to create movie" });
  }

  return response.status(200).json({ movie });
};
