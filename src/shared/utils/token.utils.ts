import { sign, verify } from "jsonwebtoken";
import * as dotenv from "dotenv";

export const createToken = (id: string, name: string): Error | String => {
  if (!id || !name) {
    return new Error("Failed to get resources");
  }

  const path = "../../../.env";

  dotenv.config({ path });
  const secret = process.env.SECRET;

  if (!secret) {
    return new Error("Failed to generate token");
  }

  const token = sign({ id, name }, secret, {
    expiresIn: 86400,
  });

  return token;
};

export const decodeToken = (token: string): String | Object | Error => {
  if (!token) {
    return new Error("Failed to get token");
  }

  const path = "../../../.env";

  dotenv.config({ path });
  const secret = process.env.SECRET;

  if (!secret) {
    return new Error("Failed to generate token");
  }

  const decodedToken = verify(token, secret);

  if (!decodedToken) {
    return new Error("Failed to decode token");
  }

  return decodedToken;
};
