import { Request, Response } from "express";
import { IUpdateMovie } from "../dtos/IUpdateMovieDTO";
import { MovieRepository } from "../repositories/MovieRepository";

export const updateMovie = async (req: Request, res: Response) => {
  const { id, amount, director, title }: IUpdateMovie = req.body;

  if (!id && (!amount || !director || !title)) {
    return res.status(403).json({ message: "Missing Resources" });
  }

  const movieRepository = new MovieRepository();

  const updatedMovie = await movieRepository.update({
    id,
    amount,
    director,
    title,
  });

  if (updateMovie instanceof Error) {
    return res.status(400).json({ message: "Faield to update movie" });
  }

  return res.status(200).json({ updatedMovie });
};
