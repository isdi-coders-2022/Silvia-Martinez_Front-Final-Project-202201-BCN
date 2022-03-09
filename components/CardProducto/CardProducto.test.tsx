import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardProducto from "./CardProducto";

describe("Given a CardProducto Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render", () => {
      const product = {
        price: 10,
        title: "silla",
        description: "silla bonita",
        category: "mueble",
      };

      render(<CardProducto product={product} />);

      const text = screen.getByRole("heading", { name: "10 €" });

      expect(text).toBeInTheDocument();
    });
  });
});