import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductList from "./ProductList";
import { Producto } from "../../types/Producto";

describe("Given a ProdcutList Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render", () => {
      const productos: Producto[] = [
        {
          _id: "234",
          price: 10,
          title: "silla",
          description: "silla bonita",
          category: "mueble",
          picture: "unafoto.jpg",
        },
      ];

      render(<ProductList products={productos} />);

      const text = screen.getByRole("heading", { name: "10 €" });

      expect(text).toBeInTheDocument();
    });
  });
});
