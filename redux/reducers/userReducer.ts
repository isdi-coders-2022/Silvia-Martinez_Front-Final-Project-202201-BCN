import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { User } from "../../types/User";
import actionTypes from "../actions/actionTypes";

/* const initUser = JSON.parse(localStorage.getItem("UserToken")) || {}; */
const user = {
  _id: "",
  name: "",
  username: "",
  email: "",
  password: "",
  picture: "",
};

const userReducers = (currentUser: User = user, action: AnyAction) => {
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

    default:
      newUser = currentUser;
      break;
  }
  return newUser;
};

export default userReducers;
