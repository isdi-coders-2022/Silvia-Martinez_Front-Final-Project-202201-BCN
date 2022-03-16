import Form from "./Form";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../jest.setup";
import userEvent from "@testing-library/user-event";
import { Producto } from "../../types/Producto";
import { createProductThunk } from "../../redux/thunks/thunks";

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
    test("Then it should call a dispatch action with the product", () => {
      renderWithProviders(<Form />);
      const title = "Silla";
      const category = "muebles";
      const description = "silla de madera";
      const product: Producto = {
        _id: "",
        category: "muebles",
        description: "silla de madera",
        picture: "",
        price: "",
        title: "Silla",
      };
      userEvent.type(screen.getByRole("textbox", { name: "Producto:" }), title);
      userEvent.type(
        screen.getByRole("textbox", { name: "Descripcion:" }),
        description
      );
      userEvent.type(
        screen.getByRole("textbox", { name: "Categoria:" }),
        category
      );
      userEvent.click(screen.getByRole("button"));

      expect(mockDispatch).toHaveBeenCalled();
      expect(createProductThunk).toBeCalledWith(product);
    });
  });
});
