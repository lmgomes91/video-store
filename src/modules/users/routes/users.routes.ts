import { Router } from "express";
import { createUser } from "../services/createUserService";
import { deleteUser } from "../services/deleteUserService";
import { listUsers } from "../services/listUserService";
import { sessionUSer } from "../services/sessionUserService";
import { updateUser } from "../services/updateUserService";
import { authAdmin } from "../../../shared/http/middlewares/authAdmin.middleware";
import { authUser } from "../../../shared/http/middlewares/authUser.middleware";

export const usersRouter = Router();

usersRouter.post("/", createUser);
usersRouter.get("/", authAdmin, listUsers);
usersRouter.put("/", authUser, updateUser);
usersRouter.delete("/", authAdmin, deleteUser);

usersRouter.post("/session", sessionUSer);
