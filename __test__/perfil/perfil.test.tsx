import { screen } from "@testing-library/react";
import renderWithProviders from "../../jest.setup";
import Perfil from "../../pages/perfil";

describe("Given a perfil page", () => {
  describe("When its invoked", () => {
    test("Then it's render with a heading", () => {
      renderWithProviders(<Perfil />);

      const text = screen.getByRole("heading", { name: "Tus productos" });

      expect(text).toBeInTheDocument();
    });
    test("Then it's render a button", () => {
      renderWithProviders(<Perfil />);

      const button = screen.getByRole("button", { name: "Añadir producto" });

      expect(button).toBeInTheDocument();
    });
    test("Then it render a list of products", () => {
      renderWithProviders(<Perfil />);

      const text = screen.getByRole("list");

      expect(text).toBeInTheDocument();
    });
  });
});
