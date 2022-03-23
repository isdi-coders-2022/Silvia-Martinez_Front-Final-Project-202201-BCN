import { HYDRATE } from "next-redux-wrapper";
import { User } from "../../types/User";
import actionTypes from "../actions/actionTypes";
import userReducer from "./userReducer";

describe("Given userReducers", () => {
  describe("When given a current obejct and  register action", () => {
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

      const newUser = userReducer(currentUser, action);

      expect(newUser).toStrictEqual(user);
    });
  });
  describe("When called HYDRATE case", () => {
    test("Then should return the elements passed by HYDRATE payload", () => {
      const user: User = {
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      };
      const initUser: User = {
        _id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        picture: "/wallaplop.jpg",
      };

      const action = {
        type: HYDRATE,
        payload: { user: user },
      };

      const newUser = userReducer(initUser, action);

      expect(newUser).toEqual(user);
    });
  });

  describe("When given a currentUser and a action that is not in actionCreators", () => {
    test("Then should return the current user because its using default statement", () => {
      const currentUser: User = {
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      };

      const action = { type: "not-work" };

      const receivedUser = userReducer(currentUser, action);

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
        picture: "/wallaplop.jpg",
      };

      const receivedUser = userReducer();

      expect(receivedUser).toEqual(currentUser);
    });
  });
  describe("When given a current obejct and  login action", () => {
    test("Then should return current objects and actions", () => {
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
        type: actionTypes.loginUser,
        user,
      };

      const newUser = userReducer(currentUser, action);

      expect(newUser).toEqual(user);
    });
  });
  describe("When given a current obejct and  load action", () => {
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
        type: actionTypes.loadUser,
        user,
      };

      const newUser = userReducer(currentUser, action);

      expect(newUser).toStrictEqual(user);
    });
  });
  describe("When given a current obejct and  logout action", () => {
    test("Then should return a  with current objects and actions", () => {
      const user: User = {
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      };
      const initUser: User = {
        _id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        picture: "/wallaplop.jpg",
      };
      const action = {
        type: actionTypes.logoutUser,
      };

      const newUser = userReducer(user, action);

      expect(newUser).toEqual(initUser);
    });
  });
});
