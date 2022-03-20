import { HYDRATE } from "next-redux-wrapper";
import { Producto } from "../../types/Producto";
import actionTypes from "../actions/actionTypes";
import productReducer from "./productReducer";

describe("Given productReducers", () => {
  describe("When given a current obejct and action", () => {
    test("Then should return a  with current objects and actions", () => {
      const product: Producto = {
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
      };

      const current: Producto = {
        _id: "",
        price: "",
        title: "",
        description: "",
        category: "",
        picture: "",
        userID: {
          username: "",
          name: "",
          picture: "",
          _id: "",
          password: "",
          email: "",
        },
      };

      const currentProduct: Producto = current;
      const action = {
        type: actionTypes.loadProduct,
        product,
      };

      const newProducts = productReducer(currentProduct, action);

      expect(newProducts).toStrictEqual(product);
    });
  });
  describe("When called HYDRATE case", () => {
    test("Then should return the elements passed by HYDRATE payload", () => {
      const initProduct = {
        _id: "",
        price: "",
        title: "",
        description: "",
        category: "",
        picture: "",
        userID: {
          username: "",
          name: "",
          picture: "",
          _id: "",
          password: "",
          email: "",
        },
      };

      const product: Producto = {
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
      };

      const action = {
        type: HYDRATE,
        payload: { product: product },
      };

      const newProduct = productReducer(initProduct, action);

      expect(newProduct).toEqual(product);
    });
  });
});
