import { Router } from "express";
import { moviesRoutes } from "../../movies/routes/movies.routes";
import { rentRouter } from "../../rents/routes/rent.routes";
import { usersRouter } from "../../users/routes/users.routes";

export const router = Router();

router.use("/users", usersRouter);
router.use("/movies", moviesRoutes);
router.use("/rent", rentRouter);
