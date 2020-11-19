import { Request, Response } from "express";
import Rent from "../entities/Rent";
import { RentRepository } from "../repositories/RentRepository";

export const listMovie = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const attribute = <string>req.query["attribute"] || null;
    const value = <string>req.query["value"] || null;

    const rentRepository = new RentRepository();

    let rents: Rent[] | Error;

    if (!attribute && !value) {
      rents = await rentRepository.retrieve();
    } else if (attribute && value) {
      rents = await rentRepository.retrieve({ attribute, value });
    } else {
      return res.status(403).json({ message: "Missing Resources" });
    }

    if (rents instanceof Error) {
      return res.status(400).json({ message: rents.message });
    }

    return res.status(200).json({ rents });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
