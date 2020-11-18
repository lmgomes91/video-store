import { Router } from "express";
import { createUser } from "../services/createUserService";
import { deleteUser } from "../services/deleteUserService";
import { listUsers } from "../services/listUserService";
import { sessionUSer } from "../services/sessionUserService";
import { updateUser } from "../services/updateUserService";

export const usersRouter = Router();

usersRouter.post("/", createUser);
usersRouter.get("/", listUsers);
usersRouter.put("/", updateUser);
usersRouter.delete("/", deleteUser);

usersRouter.post("/session", sessionUSer);
