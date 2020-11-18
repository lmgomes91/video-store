import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export const updateUser = (req: Request, res: Response) => {
  return res.status(404).json({ message: "Not suported yet" });
  const { id } = req.body;

  if (!id) {
    return res.status(403).json({ message: "Missing Resources" });
  }

  const userRepository = new UserRepository();

  const user = userRepository.retrieve({ attribute: "id", value: id });
};
