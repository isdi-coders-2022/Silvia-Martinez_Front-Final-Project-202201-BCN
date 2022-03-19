import { screen } from "@testing-library/react";
import renderWithProviders from "../../jest.setup";
import Home from "../../pages";

describe("Given a index page", () => {
  describe("When its invoked", () => {
    test("Then it's render with a list with item 'Motor'", () => {
      renderWithProviders(<Home />);

      const list = screen.getByRole("link", { name: "Motor" });

      expect(list).toBeInTheDocument();
    });
    test("Then it's render with a heading", () => {
      renderWithProviders(<Home />);

      const text = screen.getByRole("heading", { name: "Cerca de ti" });

      expect(text).toBeInTheDocument();
    });
  });
});
