import { Router } from "express";
import { moviesRoutes } from "../../movies/routes/movies.routes";
import { usersRouter } from "../../users/routes/users.routes";

export const router = Router();

router.use("/users", usersRouter);
router.use("/movies", moviesRoutes);
