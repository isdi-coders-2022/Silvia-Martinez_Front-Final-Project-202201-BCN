import {
  createProductThunk,
  deleteProductThunks,
  loadProductsThunks,
  loadProductsUserThunks,
  loginUserThunks,
  registerUserThunks,
  updateProductThunk,
} from "./thunks";
import "@testing-library/jest-dom";
import { Producto } from "../../types/Producto";
import { User } from "../../types/User";
import jwtDecode from "jwt-decode";

jest.mock("jwt-decode", () => () => ({
  name: "Pepe",
  username: "Pepito",
  email: "pepe@pepe.com",
  _id: "623359fc14fef71610125a52",
}));

describe("Given a load thunk function", () => {
  describe("When it's invoked", () => {
    test("then it should call a dispatch", async () => {
      const dispatch = jest.fn();

      await loadProductsThunks(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadProductUSer thunk function", () => {
  describe("When it's invoked", () => {
    test("then it should call a dispatch", async () => {
      const dispatch = jest.fn();

      await loadProductsUserThunks(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deletePRoduct thunk function", () => {
  describe("When it's invoked with a valid id", () => {
    test("Then it should call a dispatch", async () => {
      const dispatch = jest.fn();
      const id = "33";

      const deleteThunk = deleteProductThunks(id);

      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a createProduct thunk function", () => {
  describe("When it's invoked", () => {
    test("Then it should call a dispatch", async () => {
      const dispatch = jest.fn();

      const product: Producto = {
        _id: "123",
        price: "10",
        title: "silla",
        description: "silla bonita",
        picture: "unafoto.jpg",
        category: "mueble",
      };

      const createThunk = createProductThunk(product);

      await createThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a updateProduct thunk function", () => {
  describe("When it's invoked", () => {
    test("Then it should call a dispatch", async () => {
      const dispatch = jest.fn();

      const product: Producto = {
        _id: "123",
        price: "12",
        title: "silla",
        description: "silla bonita",
        picture: "unafoto.jpg",
        category: "mueble",
      };

      const updateThunk = updateProductThunk(product);

      await updateThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a registerUser thunk function", () => {
  describe("When it's invoked", () => {
    test("Then it should called a dispatch", async () => {
      const dispatch = jest.fn();

      const user: User = {
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      };

      const registerThunk = registerUserThunks(user);

      await registerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a login user thunk", () => {
  describe("When it's invoked", () => {
    test("Then it should called a dispatch", async () => {
      const dispatch = jest.fn();

      const user: User = {
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        password: "1234",
        picture: "",
      };

      const loginThunk = loginUserThunks(user);

      await loginThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
