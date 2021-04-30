import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import User from "../entities/User";
import { IRetriveUser } from "../dtos/IRetrieveUserDTO";

export const listUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    

    const userRepository = new UserRepository();

    let users: User[] | Error;

    const query: IRetriveUser = req.query

    if(!query){
      users = await userRepository.retrieve()
    } else {
      users = await userRepository.retrieve(query)

    }

   
    if (users instanceof Error) {
      return res.status(400).json({ message: users.message });
    }

    for (const user of users) {
      delete user.password;
    }

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
