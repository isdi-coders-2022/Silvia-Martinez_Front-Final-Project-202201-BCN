import { User } from "../../types/User";
import actionTypes from "../actions/actionTypes";
import userReducers from "./userReducer";

describe("Given userReducers", () => {
  describe("When given a current obejct and action", () => {
    test("Then should return a  with current objects and actions", () => {
      const user: User = {
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      };
      const currentUser: User = {
        _id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        picture: "",
      };
      const action = {
        type: actionTypes.registerUser,
        user,
      };

      const newUser = userReducers(currentUser, action);

      expect(newUser).toStrictEqual(user);
    });
  });

  describe("When given a currentProduct and a action that is not in actionCreators", () => {
    test("Then should return the current list because its using default statement", () => {
      const currentUser: User = {
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      };

      const action = { type: "not-work" };

      const receivedUser = userReducers(currentUser, action);

      expect(receivedUser).toEqual(currentUser);
    });
  });
  describe("When given empty state and action", () => {
    test("Then should return an empty user", () => {
      const currentUser: User = {
        _id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        picture: "",
      };

      const action = { type: "" };

      const receivedUser = userReducers(currentUser, action);

      expect(receivedUser).toEqual(currentUser);
    });
  });
});
