import {
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
