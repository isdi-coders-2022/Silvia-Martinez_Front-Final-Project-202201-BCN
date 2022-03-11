import { loadProductsThunks, loadProductsUserThunks } from "./thunks";

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
