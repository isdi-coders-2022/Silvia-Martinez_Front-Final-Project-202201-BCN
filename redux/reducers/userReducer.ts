import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { User } from "../../types/User";
import actionTypes from "../actions/actionTypes";

const initUser: User = {
  _id: "",
  name: "",
  username: "",
  email: "",
  password: "",
  picture: "/wallaplop.jpg",
};

const userReducers = (
  currentUser: User = initUser,
  action: AnyAction = { type: "" }
) => {
  let newUser: User;

  switch (action.type) {
    case HYDRATE:
      newUser = { ...action.payload.user };
      break;
    case actionTypes.registerUser:
      newUser = { ...action.user };
      break;
    case actionTypes.loginUser:
      newUser = { ...action.user };
      break;
    case actionTypes.loadUser:
      newUser = { ...action.user };
      break;
    case actionTypes.logoutUser:
      newUser = initUser;
      break;
    default:
      newUser = currentUser;
      break;
  }
  return newUser;
};

export default userReducers;
