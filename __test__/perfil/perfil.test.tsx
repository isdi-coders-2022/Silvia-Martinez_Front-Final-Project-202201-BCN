import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../jest.setup";
import Perfil from "../../pages/perfil";
import { wrapper } from "../../redux/store";
import { deleteProductThunks } from "../../redux/thunks/thunks";

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
    test("Then it render a list of products", async () => {
      const WrappedComponent = await wrapper.withRedux(Perfil);

      renderWithProviders(<WrappedComponent />);
      let title;
      let button;

      await waitFor(() => {
        title = screen.getByRole("heading", { name: "play station" });
        button = screen.getByRole("button", { name: "Añadir producto" });
      });

      expect(title).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
