import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { sign } from "jsonwebtoken";
import * as dotenv from "dotenv";

export const sessionUSer = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(403).json({ message: "Missing Resources" });
  }

  const userRepository = new UserRepository();

  const user = await userRepository.retrieve({
    attribute: "email",
    value: email,
  });

  if (user instanceof Error || user.length === 0) {
    return res.status(400).json({ message: "Failed to find the user" });
  }

  if (password !== user[0].password) {
    return res.status(403).json({ message: "Invalid credentials" });
  }

  const path = "../../../.env";

  dotenv.config({ path });
  const secret = process.env.SECRET;

  if (!secret) {
    return res.status(400).json({ message: "Failed to generate token" });
  }

  const token = sign({ id: user[0].id, name: user[0].name }, secret, {
    expiresIn: 86400,
  });

  res.status(200).json({ name: user[0].name, token });
};
