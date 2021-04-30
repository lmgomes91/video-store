import { Request, Response } from "express";
import { MovieRepository } from "../repositories/MovieRepository";

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(403).json({ message: "Missing Resources" });
    }

    const movieRepository = new MovieRepository();

    const deleted = await movieRepository.delete(id);

    if (!deleted) {
      return res.status(400).json({ message: "Faield to delete movie" });
    }

    return res.status(200).json({ deleted });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
