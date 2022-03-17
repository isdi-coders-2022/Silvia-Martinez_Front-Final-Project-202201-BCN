import { screen } from "@testing-library/react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import renderWithProviders from "../../jest.setup";
import Register from "../../pages/register";

describe("Given a Register Page", () => {
  describe("When it is invoked", () => {
    test("Then it should render a form with input 'Nombre'", () => {
      renderWithProviders(<Register />);

      const text = screen.getByRole("textbox", { name: "Nombre:" });

      expect(text).toBeInTheDocument();
    });
  });
});
