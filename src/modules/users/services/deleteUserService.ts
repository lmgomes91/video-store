import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(403).json({ message: "Missing resource" });
    }

    const userRepository = new UserRepository();

    const delUser = await userRepository.delete(id);

    if (delUser instanceof Error) {
      return res.status(400).json({ message: delUser.message });
    }

    if (!delUser) {
      return res.status(400).json({ message: "Could not delete the user" });
    }

    return res.status(200).json({ message: "Deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }

  return res.status(404).json({ message: "Not suported yet" });
};
