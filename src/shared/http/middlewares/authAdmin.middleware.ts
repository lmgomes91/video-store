import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";

export const authAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const auth = req.headers.authorization?.split(" ");

    if (!auth) {
      return res.status(400).json({ message: "No token sent" });
    }

    const token = auth[1];

    const path = "../../../.env";

    dotenv.config({ path });
    const adminToken = process.env.ADMIN_TOKEN;

    if (!adminToken || adminToken !== token) {
      res.status(403).json({ message: "Failed to decode token" });
    }

    return next();
  } catch (error) {
    res.status(500).json({ error });
  }
};
