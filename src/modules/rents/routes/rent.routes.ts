import { Router } from "express";
import { authAdmin } from "../../../shared/http/middlewares/authAdmin.middleware";
import { authUser } from "../../../shared/http/middlewares/authUser.middleware";
import { listMovie } from "../services/listRentService";
import { rentMovie } from "../services/rentMovieService";
import { returnMovie } from "../services/returnMovie";

export const rentRouter = Router();

rentRouter.post("/", authUser, rentMovie);
rentRouter.delete("/", authUser, returnMovie);
rentRouter.get("/", authAdmin, listMovie);
