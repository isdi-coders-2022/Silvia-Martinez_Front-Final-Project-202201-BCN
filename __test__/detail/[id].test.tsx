import { render, screen } from "@testing-library/react";
import DetailPage from "../../pages/detail/[id]";
import { Producto } from "../../types/Producto";

describe("Given a detial page", () => {
  describe("When it is invoked", () => {
    test("It should render a heart icon", () => {
      const producto: Producto = {
        _id: "",
        category: "muebles",
        description: "silla de madera",
        picture: "unafoto.jpg",
        price: 14,
        title: "Silla",
      };
      render(<DetailPage product={producto} />);

      const text = screen.getByTitle("like-icon");

      expect(text).toBeInTheDocument();
    });
    test("It should render prodcut price: '14 €'", () => {
      const producto: Producto = {
        _id: "",
        category: "muebles",
        description: "silla de madera",
        picture: "unafoto.jpg",
        price: 14,
        title: "Silla",
      };
      render(<DetailPage product={producto} />);

      const text = screen.getByRole("heading", { name: "14 €" });

      expect(text).toBeInTheDocument();
    });
  });
});
