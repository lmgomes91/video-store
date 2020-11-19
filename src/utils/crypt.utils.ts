import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";

export const crypt = (word: string): string | Error => {
  const path = "../../../.env";

  dotenv.config({ path });
  const salt = process.env.SALT;

  if (!salt || !word) {
    return new Error("Failed to hash password");
  }

  const hashedPass = bcrypt.hashSync(word, Number(salt));
  return hashedPass;
};

export const verify = async (
  word: string,
  encrypt: string
): Promise<boolean | Error> => {
  if (!word || !encrypt) {
    return new Error("Failed to hash password");
  }

  return await bcrypt.compare(word, encrypt);
};
