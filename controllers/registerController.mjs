import { v4 as createId } from "uuid";
import { usersList } from "../data/users.mjs";
import { hashPassword } from "../utils/hashing.mjs";

export const registerController = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    address,
    gender,
    termsAndConditions,
    newsletter,
  } = req.body;

  const hasUser = usersList.some((user) => user.email === email);

  if (hasUser) {
    res.status(400).json({ message: "User already exist" });
    return;
  }

  const user = {
    _id: createId(),
    email,
    password: await hashPassword(password),
    firstName,
    lastName,
    address,
    gender,
    termsAndConditions,
    newsletter,
  };

  usersList.push(user);

  console.log(usersList);

  res.json({ message: "ok" });
};
