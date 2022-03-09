import { Producto } from "../../types/Producto";
import { loadProductsActions } from "./actionCreator";

describe("Given a loadProductsActions", () => {
  describe("When it receives a product", () => {
    test("Then it should return an action with product inside", () => {
      const products: Producto[] = [
        {
          price: 10,
          title: "silla",
          description: "silla bonita",
          category: "mueble",
        },
      ];

      const expectedAction = { type: "load-products", products: products };
      const action = loadProductsActions(products);
      expect(action).toEqual(expectedAction);
    });
  });
});
