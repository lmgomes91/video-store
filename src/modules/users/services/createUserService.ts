import { Request, Response } from "express";
import { crypt } from "../../../shared/utils/crypt.utils";
import { ICreateUser } from "../dtos/ICreateUserDTO";
import { UserRepository } from "../repositories/UserRepository";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, name, password }: ICreateUser = req.body;

    if (!email || !name || !password) {
      return res.status(403).json({ message: "Missing resources" });
    }
    const userRepository = new UserRepository();

    const hashed = crypt(password);
    if (hashed instanceof Error) {
      return res.status(400).json({ message: hashed.message });
    }
    const user = await userRepository.create({
      email,
      name,
      password: hashed,
    });
    if (user instanceof Error) {
      return res.status(400).json({ message: user.message });
    }
    delete user.password;
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
