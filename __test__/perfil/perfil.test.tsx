import { screen } from "@testing-library/react";
import renderWithProviders from "../../jest.setup";
import Perfil from "../../pages/perfil";

describe("Given a perilpage", () => {
  describe("When its invoked", () => {
    test("Then it's render with a heading", () => {
      renderWithProviders(<Perfil />);

      const text = screen.getByRole("heading");

      expect(text).toBeInTheDocument();
    });
  });
});
