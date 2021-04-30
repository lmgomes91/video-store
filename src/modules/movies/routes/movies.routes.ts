import { Router } from "express";
import { authAdmin } from "../../../shared/http/middlewares/authAdmin.middleware";
import { authUser } from "../../../shared/http/middlewares/authUser.middleware";
import { createMovie } from "../services/CreateMovieService";
import { deleteMovie } from "../services/DeleteMovieService";
import { listMovies } from "../services/listMoviesServices";
import { updateMovie } from "../services/updateMovieServices";

export const moviesRoutes = Router();

moviesRoutes.post("/", authAdmin, createMovie);
moviesRoutes.get("/", authUser, listMovies);
moviesRoutes.put("/", authAdmin, updateMovie);
moviesRoutes.delete("/", authAdmin, deleteMovie);
