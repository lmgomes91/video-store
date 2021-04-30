import { Request, Response } from "express";
import { crypt } from "../../../shared/utils/crypt.utils";
import { UserRepository } from "../repositories/UserRepository";

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.body["user"];
    const { email, name, password } = req.body;

    if (!email && !name && !password) {
      return res.status(403).json({ message: "Missing Resources" });
    }
    const userRepository = new UserRepository();
    let user;
    if (password) {
      const hashed = crypt(password);
      if (hashed instanceof Error) {
        return res.status(400).json({ message: hashed.message });
      }
      user = await userRepository.update({
        id,
        email,
        name,
        password: hashed,
      });
    } else {
      user = await userRepository.update({
        id,
        email,
        name,
      });
    }

    if (user instanceof Error) {
      return res.status(400).json({ message: user.message });
    }
    delete user.password;
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
