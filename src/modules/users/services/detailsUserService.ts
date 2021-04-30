import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";


export const detailUserService = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    
    const id: string = req.params.id

    if(!id){
      return res.status(400).json({ message: "Missing resources" });
    }

    const userRepository = new UserRepository();

    const user = await userRepository.retrieveOne({id})

    // restore all movies from user

    if (user instanceof Error) {
      return res.status(400).json({ message: user.message });
    }

    delete user.password
    
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
