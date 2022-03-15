import {
  createProductThunk,
  deleteProductThunks,
  loadProductsThunks,
  loadProductsUserThunks,
  updateProductThunk,
} from "./thunks";
import "@testing-library/jest-dom";
import { Producto } from "../../types/Producto";

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
