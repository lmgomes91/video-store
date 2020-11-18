import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import User from "../entities/User";

export const listUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // const { attribute, value }: IRetriveUser = req.body;
  const attribute = <string>req.query["attribute"] || null;
  const value = <string>req.query["value"] || null;

  const userRepository = new UserRepository();

  let users: User[] | Error;

  if (!attribute && !value) {
    users = await userRepository.retrieve();
  } else if (attribute && value) {
    users = await userRepository.retrieve({ attribute, value });
  } else {
    return res.status(403).json({ message: "Missing Resources" });
  }

  if (users instanceof Error) {
    return res.status(400).json({ message: users.message });
  }

  for (const user of users) {
    delete user.password;
  }

  return res.status(200).json({ users });
};
