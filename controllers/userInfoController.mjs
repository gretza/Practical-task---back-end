import { usersList } from "../data/users.mjs";
import { decodeToken } from "../utils/tokens.mjs";

export const userInfoController = (req, res) => {
  console.log(usersList);

  if (!req.user) {
    res.status(403).json({ message: "User not logged in." });
    return;
  }
  const authId = decodeToken(req.headers.token)?._id;
  const user = usersList.find(({_id}) => _id === authId)

  res.json(user);
};


 

