import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export const deleteUser = (req: Request, res: Response) => {
  return res.status(404).json({ message: "Not suported yet" });
};
