import { Producto } from "../../types/Producto";
import { deleteProductActions, loadProductsActions } from "./actionCreator";

describe("Given a loadProductsActions", () => {
  describe("When it receives a product", () => {
    test("Then it should return an action with product inside", () => {
      const products: Producto[] = [
        {
          _id: "124",
          price: 10,
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
        },
      ];

      const expectedAction = { type: "load-products", products: products };
      const action = loadProductsActions(products);
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
          price: 10,
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
        },
      ];
      const expectedAction = { type: "delete-product", id: "124" };
      const action = deleteProductActions(products[0]._id);
      expect(action).toEqual(expectedAction);
    });
  });
});
