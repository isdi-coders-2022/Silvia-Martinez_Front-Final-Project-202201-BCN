import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardProductoUser from "./CardProductoUser";
import { Producto } from "../../types/Producto";

describe("Given a CardProducto Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render", () => {
      const product: Producto = {
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
