import { Router } from "express";
import { moviesRoutes } from "../../../modules/movies/routes/movies.routes";
import { rentRouter } from "../../../modules/rents/routes/rent.routes";
import { usersRouter } from "../../../modules/users/routes/users.routes";

export const router = Router();

router.use("/users", usersRouter);
router.use("/movies", moviesRoutes);
router.use("/rents", rentRouter);
