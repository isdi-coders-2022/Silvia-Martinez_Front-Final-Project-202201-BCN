import {
  createProductThunk,
  deleteProductThunks,
  loadProductsThunks,
  loadProductsUserThunks,
} from "./thunks";
import "@testing-library/jest-dom";

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

      const product = {
        _id: "123",
        price: 10,
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
