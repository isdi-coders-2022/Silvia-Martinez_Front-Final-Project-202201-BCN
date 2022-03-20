import { screen } from "@testing-library/react";
import renderWithProviders from "../../jest.setup";
import EditProduct from "../../pages/edit/[id]";
import { Producto } from "../../types/Producto";

describe("Given an edit form page", () => {
  describe("When it is rendered wiht a product data", () => {
    test("Then it should render the product data in the input", () => {
      const producto: Producto = {
        _id: "",
        category: "muebles",
        description: "silla de madera",
        picture: "unafoto.jpg",
        price: "14",
        title: "Silla",
        userID: {
          username: "",
          name: "Pepe",
          picture: "",
          _id: "",
          password: "",
          email: "",
        },
      };

      renderWithProviders(<EditProduct product={producto} />);

      const inputDescription = screen.getByDisplayValue(producto.description);
      const inputPrice = screen.getByDisplayValue(producto.price);
      const inputTitle = screen.getByDisplayValue(producto.title);

      expect(inputDescription).toBeInTheDocument();
      expect(inputPrice).toBeInTheDocument();
      expect(inputTitle).toBeInTheDocument();
    });
  });
});
