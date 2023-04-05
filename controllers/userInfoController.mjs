import { usersList } from "../data/users.mjs";
import { decodeToken } from "../utils/tokens.mjs";

export const userInfoController = (req, res) => {
  console.log(usersList);
  const authId = decodeToken(req.headers.token)?._id;
  const user = usersList.find(({_id}) => _id === authId)
  res.json();


  // res.json({
  //   email: user.email,
  //   firstName: user.firstName,
  //   lastName: user.lastName,
  //   address: user.address,
  //   gender: user.gender,
  //   newsletter: user.newsletter,
  // })


  // if (!req.user) {
  //   res.status(403).json({ message: "User not logged in." });
  //   return;
  // }

  // if (!usersList[req.user._id]) {
  //   usersList[req.user._id] = [];
  // }
  // const userInfo = usersList[req.user._id];

 
};
