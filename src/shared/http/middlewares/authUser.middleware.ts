import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../../utils/token.utils";

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  try {

    const auth = req.headers.authorization?.split(" ");

    if (!auth) {
      return res.status(400).json({ message: "No token sent" });
    }

    const token = auth[1];

    const decodedToken = decodeToken(token);

    if (decodedToken instanceof Error) {
      return res.status(403).json({ message: decodedToken.message });
    }

    req.body["user"] = decodedToken;

    return next();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
