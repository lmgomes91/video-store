import { Router } from "express";
import { createMovie } from "../services/CreateMovieService";
import { deleteMovie } from "../services/DeleteMovieService";
import { listMovies } from "../services/listMoviesServices";
import { updateMovie } from "../services/updateMovieServices";

export const moviesRoutes = Router();

moviesRoutes.post("/", createMovie);
moviesRoutes.get("/", listMovies);
moviesRoutes.put("/", updateMovie);
moviesRoutes.delete("/", deleteMovie);
