import { AnyAction } from "redux";
import { User } from "../../types/User";
import actionTypes from "../actions/actionTypes";

const initUser: User = {
  _id: "",
  name: "",
  username: "",
  email: "",
  password: "",
  picture: "",
};

const userReducers = (currentUser: User = initUser, action: AnyAction) => {
  let newUser: User;

  switch (action.type) {
    case actionTypes.registerUser:
      newUser = { ...action.user };
      break;
    case actionTypes.loginUser:
      newUser = { ...action.user };
      break;

    default:
      newUser = currentUser;
      break;
  }
  return newUser;
};

export default userReducers;
