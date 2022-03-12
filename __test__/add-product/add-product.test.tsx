import { screen } from "@testing-library/react";
import renderWithProviders from "../../jest.setup";
import AddProduct from "../../pages/add-product";

describe("Given a add-product page", () => {
  describe("When its invoked", () => {
    test("Then it's render with a form", () => {
      renderWithProviders(<AddProduct />);

      const text = screen.getByRole("textbox", { name: "Producto:" });

      expect(text).toBeInTheDocument();
    });
    test("Then it's render a button", () => {
      renderWithProviders(<AddProduct />);

      const button = screen.getByRole("button", { name: "Añadir" });

      expect(button).toBeInTheDocument();
    });
  });
});
