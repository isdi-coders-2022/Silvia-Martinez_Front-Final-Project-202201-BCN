import { Producto } from "../../types/Producto";
import actionTypes from "../actions/actionTypes";
import productsReducers from "./productsReducers";

describe("Given productReducers", () => {
  describe("When given a current obejct and action", () => {
    test("Then should return a  with current objects and actions", () => {
      const products = [1, 2, 3];
      const currentProducts: Producto[] = [];
      const action = {
        type: actionTypes.loadProducts,
        products,
      };

      const newProdcuts = productsReducers(currentProducts, action);

      expect(newProdcuts).toStrictEqual(products);
    });
  });
  describe("When given a currentProduct and a action that is not in actionCreators", () => {
    test("Then should return the current list because its using default statement", () => {
      const currentProducts = [
        {
          price: 10,
          title: "silla",
          description: "silla bonita",
          category: "mueble",
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
