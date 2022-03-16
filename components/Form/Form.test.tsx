import Form from "./Form";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../jest.setup";
import userEvent from "@testing-library/user-event";
import { createProductThunk } from "../../redux/thunks/thunks";
import { Producto } from "../../types/Producto";

jest.mock("next/router", () => require("next-router-mock"));

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/thunks", () => ({
  createProductThunk: jest.fn(),
}));

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 'Imagen:'", () => {
      renderWithProviders(<Form />);

      const renderedElement = screen.getByLabelText("Imagen:");

      expect(renderedElement).toBeInTheDocument();
    });
    test("Then it should render an input", () => {
      renderWithProviders(<Form />);

      const renderedInput = screen.getAllByRole("textbox");

      expect(renderedInput).not.toBeNull();
    });
    test("Then it should render a Placeholder input", () => {
      renderWithProviders(<Form />);

      const nameInput = screen.queryByPlaceholderText("Nombre del Producto");

      expect(nameInput).toBeInTheDocument();
    });
  });
  describe("When it types in the title input", () => {
    test("Then it should type the product 'Silla'", () => {
      renderWithProviders(<Form />);

      const title = screen.getByRole("textbox", { name: "Producto:" });

      const product = "Silla";

      userEvent.type(title, product);

      expect(title).toHaveValue(product);
    });
  });
});
