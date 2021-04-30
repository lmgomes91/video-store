import { Request, Response } from "express";
import { IRetriveRent } from "../dtos/IRetrieveRentDTO";
import Rent from "../entities/Rent";
import { RentRepository } from "../repositories/RentRepository";

export const listMovie = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const query: IRetriveRent = req.query

    const rentRepository = new RentRepository();

    let rents: Rent[] | Error;

    if (!query) {
      rents = await rentRepository.retrieve();
    } else{
      rents = await rentRepository.retrieve(query);
    }
    if (rents instanceof Error) {
      return res.status(400).json({ message: rents.message });
    }

    return res.status(200).json({ rents });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
