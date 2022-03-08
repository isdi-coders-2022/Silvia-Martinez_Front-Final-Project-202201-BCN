import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardProducto from "./CardProducto";

describe("Given a CardProducto Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render", () => {
      render(<CardProducto />);

      const text = screen.getByRole("heading", { name: "Precio" });

      expect(text).toBeInTheDocument();
    });
  });
});
