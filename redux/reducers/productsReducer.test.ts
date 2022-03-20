import { HYDRATE } from "next-redux-wrapper";
import { Producto } from "../../types/Producto";
import actionTypes from "../actions/actionTypes";
import productsReducers from "./productsReducers";

describe("Given productReducers", () => {
  describe("When given a current obejct and action", () => {
    test("Then should return a  with current objects and actions", () => {
      const products: Producto[] = [
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
        type: actionTypes.loadProducts,
        products,
      };

      const newProdcuts = productsReducers(currentProducts, action);

      expect(newProdcuts).toStrictEqual(products);
    });
  });
  describe("When called HYDRATE case", () => {
    test("Then should return the elements passed by HYDRATE payload", () => {
      const products: Producto[] = [
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

      const action = {
        type: HYDRATE,
        payload: { products: products },
      };

      const newProduct = productsReducers([], action);

      expect(newProduct).toEqual(products);
    });
  });

  describe("When given a currentProduct and a action that is not in actionCreators", () => {
    test("Then should return the current list because its using default statement", () => {
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

      const newProducts = productsReducers(currentProducts, action);

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

      const newProducts = productsReducers(currentProducts, action);

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

      const updatedProducts = productsReducers(currentProducts, action);

      expect(updatedProducts.length).toBe(1);
    });
  });
});
