import { HYDRATE } from "next-redux-wrapper";
import { Producto } from "../../types/Producto";
import actionTypes from "../actions/actionTypes";
import productsUserReducer from "./productsUserReducer";

describe("Given a product User Reducer", () => {
  describe("When given a current object and a load action", () => {
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

  describe("When given a delete action", () => {
    test("Then should return the list minus the corresponding with the id", () => {
      const currentProducts: Producto[] = [
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
          _id: "1235",
          price: "10",
          title: "taburete",
          description: "taburete feo",
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

      const expectedProducts: Producto[] = [
        {
          _id: "1235",
          price: "10",
          title: "taburete",
          description: "taburete feo",
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

      const action = {
        type: actionTypes.deleteProduct,
        id: "1234",
      };

      const newProducts = productsUserReducer(currentProducts, action);

      expect(newProducts).toEqual(expectedProducts);
    });
  });
  describe("When given a create action", () => {
    test("Then should return the list with the new product", () => {
      const currentProducts: Producto[] = [
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
      ];
      const product: Producto[] = [
        {
          _id: "1235",
          price: "10",
          title: "taburete",
          description: "taburete feo",
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

      const action = {
        type: actionTypes.createProduct,
        product,
      };

      const newProducts = productsUserReducer(currentProducts, action);

      expect(newProducts.length).toEqual(2);
    });
  });
  describe("When given a update action", () => {
    test("Then should return the list with the updated product", () => {
      const currentProducts: Producto[] = [
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
          _id: "1235",
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

      const product: Producto = {
        _id: "1234",
        price: "10",
        title: "silla",
        description: "silla fea",
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
        type: actionTypes.updateProduct,
        product,
      };

      const updatedProducts = productsUserReducer(currentProducts, action);

      expect(updatedProducts.length).toBe(2);
    });
  });
});
