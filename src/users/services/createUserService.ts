import { Request, Response } from "express";
import { ICreateUser } from "../dtos/ICreateUserDTO";
import { UserRepository } from "../repositories/UserRepository";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, name, password }: ICreateUser = req.body;

  if (!email || !name || !password) {
    return res.status(403).json({ message: "Missing resources" });
  }

  const userRepository = new UserRepository();

  const user = await userRepository.create({ email, name, password });

  if (user instanceof Error) {
    return res.status(400).json({ message: user.message });
  }

  return res.status(200).json({ user });
};
