import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardDetail from "./CardDetail";

describe("Given a CardDetail Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render with heading", () => {
      const product = {
        _id: "1234",
        price: 10,
        title: "silla",
        description: "silla bonita",
        category: "mueble",
        picture: "image.jpg",
      };

      render(<CardDetail product={product} />);

      const text = screen.getByRole("heading", { name: "10 €" });

      expect(text).toBeInTheDocument();
    });
    test("Then it should render with heading", () => {
      const product = {
        _id: "1234",
        price: 10,
        title: "silla",
        description: "silla bonita",
        category: "mueble",
        picture: "image.jpg",
      };

      const icon = "like-icon";

      render(<CardDetail product={product} />);

      const text = screen.getByTitle(icon);

      expect(text).toBeInTheDocument();
    });
  });
});
