import { Request, Response } from "express";
import { MovieRepository } from "../repositories/MovieRepository";

export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.body;

  if (!id) {
    return res.status(403).json({ message: "Missing Resources" });
  }

  const movieRepository = new MovieRepository();

  const deleted = movieRepository.delete(id);

  if (!deleted) {
    return res.status(400).json({ message: "Faield to delete movie" });
  }

  return res.status(200).json({ deleted });
};
