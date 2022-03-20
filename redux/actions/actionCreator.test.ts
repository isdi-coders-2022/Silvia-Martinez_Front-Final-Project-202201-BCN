import { Producto } from "../../types/Producto";
import { User } from "../../types/User";
import {
  createProductActions,
  deleteProductActions,
  loadProductsActions,
  loadProductsUserActions,
  loadUserActions,
  loginUserActions,
  logoutUserActions,
  registerUserActions,
  updateProductActions,
} from "./actionCreator";

describe("Given a loadProductsActions", () => {
  describe("When it receives a product", () => {
    test("Then it should return an action with product inside", () => {
      const products: Producto[] = [
        {
          _id: "124",
          price: "10",
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
          userID: {
            _id: "",
            name: "Pepe",
            username: "Pepito",
            email: "pepe@pepe.com",
            password: "1234",
            picture: "",
          },
        },
      ];

      const expectedAction = { type: "load-products", products: products };
      const action = loadProductsActions(products);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loadProductsActions", () => {
  describe("When it receives a product", () => {
    test("Then it should return an action with product inside", () => {
      const products: Producto[] = [
        {
          _id: "124",
          price: "10",
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
          userID: {
            _id: "",
            name: "Pepe",
            username: "Pepito",
            email: "pepe@pepe.com",
            password: "1234",
            picture: "",
          },
        },
      ];

      const expectedAction = {
        type: "load-user-products",
        productsUser: products,
      };
      const action = loadProductsUserActions(products);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteProductAction", () => {
  describe("When it receives an id", () => {
    test("Then it should return an action delete", () => {
      const products: Producto[] = [
        {
          _id: "124",
          price: "10",
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
          userID: {
            _id: "",
            name: "Pepe",
            username: "Pepito",
            email: "pepe@pepe.com",
            password: "1234",
            picture: "",
          },
        },
      ];
      const expectedAction = { type: "delete-product", id: "124" };
      const action = deleteProductActions(products[0]._id);
      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given a createProductAction", () => {
  describe("When it receives a product", () => {
    test("Then it should return an action create", () => {
      const product: Producto = {
        _id: "124",
        price: "10",
        title: "silla",
        description: "silla bonita",
        category: "mueble",
        picture: "unafoto.jpg",
        userID: {
          _id: "",
          name: "Pepe",
          username: "Pepito",
          email: "pepe@pepe.com",
          password: "1234",
          picture: "",
        },
      };
      const expectedAction = { type: "create-product", product };
      const action = createProductActions(product);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a updateProductAction", () => {
  describe("When it receives a product", () => {
    test("Then it should return an action update", () => {
      const product: Producto = {
        _id: "124",
        price: "10",
        title: "silla",
        description: "silla bonita",
        category: "mueble",
        picture: "unafoto.jpg",
        userID: {
          _id: "",
          name: "Pepe",
          username: "Pepito",
          email: "pepe@pepe.com",
          password: "1234",
          picture: "",
        },
      };
      const expectedAction = { type: "update-product", product };
      const action = updateProductActions(product);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a registerUserAction", () => {
  describe("When it receives a user", () => {
    test("Then it should return an action register", () => {
      const user: User = {
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      };

      const expectedAction = { type: "register-user", user: user };
      const action = registerUserActions(user);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loginUserAction", () => {
  describe("When it receives a user", () => {
    test("Then it should return an action register", () => {
      const user: User = {
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      };

      const expectedAction = { type: "login-user", user: user };
      const action = loginUserActions(user);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loadUserAction", () => {
  describe("When it receives a user", () => {
    test("Then it should return an action load", () => {
      const user: User = {
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      };

      const expectedAction = { type: "load-user", user: user };
      const action = loadUserActions(user);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a logoutUserAction", () => {
  describe("When it receives a user", () => {
    test("Then it should return an action register", () => {
      const expectedAction = { type: "logout-user" };
      const action = logoutUserActions();

      expect(action).toEqual(expectedAction);
    });
  });
});
