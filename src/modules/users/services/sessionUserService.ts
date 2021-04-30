import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { createToken } from "../../../shared/utils/token.utils";
import { verify } from "../../../shared/utils/crypt.utils";

export const sessionUSer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).json({ message: "Missing Resources" });
    }

    const userRepository = new UserRepository();

    const user = await userRepository.retrieve({
      email
    });

    if (user instanceof Error || user.length === 0) {
      return res.status(400).json({ message: "Failed to find the user" });
    }

    if (user[0].password && !verify(password, user[0].password)) {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    const token = createToken(user[0].id, user[0].name);

    if (token instanceof Error) {
      return res.status(400).json({ message: token.message });
    }

    return res.status(200).json({ name: user[0].name, token });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
