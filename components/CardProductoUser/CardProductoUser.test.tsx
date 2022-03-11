import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardProductoUser from "./CardProductoUser";

describe("Given a CardProducto Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render", () => {
      const product = {
        price: 14,
        title: "silla",
        description: "silla bonita",
        category: "mueble",
        picture: "image.jpg",
      };

      render(<CardProductoUser product={product} />);

      const text = screen.getByRole("heading", { name: "14 €" });

      expect(text).toBeInTheDocument();
    });
  });
});
