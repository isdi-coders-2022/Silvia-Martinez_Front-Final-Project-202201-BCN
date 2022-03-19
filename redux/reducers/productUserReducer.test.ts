import { Producto } from "../../types/Producto";
import actionTypes from "../actions/actionTypes";
import productsUserReducer from "./productsUserReducer";

describe("Given a product User Reducer", () => {
  describe("When given a current obejct and action", () => {
    test("Then should return a  with current objects and actions", () => {
      const productsUser: Producto[] = [
        {
          _id: "1234",
          price: "10",
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
          userID: {
            username: "",
            name: "Pepe",
            picture: "",
            _id: "",
            password: "",
            email: "",
          },
        },
        {
          _id: "4456",
          price: "10",
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
          userID: {
            username: "",
            name: "Pepe",
            picture: "",
            _id: "",
            password: "",
            email: "",
          },
        },
      ];
      const currentProducts: Producto[] = [];
      const action = {
        type: actionTypes.loadUserProducts,
        productsUser,
      };

      const newUserProducts = productsUserReducer(currentProducts, action);

      expect(newUserProducts).toStrictEqual(productsUser);
    });
  });
});
