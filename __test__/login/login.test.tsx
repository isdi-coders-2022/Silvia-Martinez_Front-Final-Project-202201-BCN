import { screen } from "@testing-library/react";
import renderWithProviders from "../../jest.setup";
import Login from "../../pages/login";

describe("Given a login page", () => {
  describe("When it is invoked", () => {
    test("Then it should render a form with input username", () => {
      renderWithProviders(<Login />);

      const text = screen.getByRole("textbox", { name: "username:" });

      expect(text).toBeInTheDocument();
    });
    test("Then it should render a heading: 'Log in!'", () => {
      renderWithProviders(<Login />);

      const text = screen.getByRole("heading", { name: "Log In!" });

      expect(text).toBeInTheDocument();
    });
  });
});
