import { Producto } from "../../types/Producto";
import actionTypes from "../actions/actionTypes";
import productsReducers from "./productsReducers";

describe("Given productReducers", () => {
  describe("When given a current obejct and action", () => {
    test("Then should return a  with current objects and actions", () => {
      const products: Producto[] = [
        {
          _id: "1234",
          price: 10,
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
        },
        {
          _id: "4456",
          price: 10,
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
        },
      ];
      const currentProducts: Producto[] = [];
      const action = {
        type: actionTypes.loadProducts,
        products,
      };

      const newProdcuts = productsReducers(currentProducts, action);

      expect(newProdcuts).toStrictEqual(products);
    });
  });

  describe("When given a current obejct and action", () => {
    test("Then should return a  with current objects and actions", () => {
      const products: Producto[] = [
        {
          _id: "1234",
          price: 10,
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
        },
        {
          _id: "4456",
          price: 10,
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
        },
      ];
      const currentProducts: Producto[] = [];
      const action = {
        type: actionTypes.loadUserProducts,
        products,
      };

      const newUserProducts = productsReducers(currentProducts, action);

      expect(newUserProducts).toStrictEqual(products);
    });
  });

  describe("When given a currentProduct and a action that is not in actionCreators", () => {
    test("Then should return the current list because its using default statement", () => {
      const currentProducts = [
        {
          _id: "1234",
          price: 10,
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
        },
      ];
      const action = { type: "not-work" };

      const receivedProducts = productsReducers(currentProducts, action);

      expect(receivedProducts).toEqual(currentProducts);
    });
  });
  describe("When given empty state and action", () => {
    test("Then should return an empty list of products", () => {
      const currentProducts: Producto[] = [];

      const receivedProducts = productsReducers();

      expect(receivedProducts).toEqual(currentProducts);
    });
  });
});
