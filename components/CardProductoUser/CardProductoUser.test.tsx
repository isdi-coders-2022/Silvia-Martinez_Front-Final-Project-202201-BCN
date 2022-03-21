import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardProductoUser from "./CardProductoUser";
import { ProductoLocation } from "../../types/ProductoLocation";

describe("Given a CardProducto Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render", () => {
      const product: ProductoLocation = {
        _id: "1234",
        price: "14",
        title: "silla",
        description: "silla bonita",
        category: "mueble",
        picture: "unafoto.jpg",
        userID: {
          username: "Pepe",
          name: "",
          picture: "",
          _id: "",
          password: "",
          email: "",
        },
        location: { lat: "", long: "" },
        adress: "diputacio 37, Barcelona",
      };

      const onClickAction = jest.fn();

      render(
        <CardProductoUser
          product={product}
          onClickDelete={onClickAction}
          onClickUpdate={onClickAction}
        />
      );

      const text = screen.getByRole("heading", { name: "14 €" });

      expect(text).toBeInTheDocument();
    });
  });
});
