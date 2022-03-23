import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Layout } from "./Layout";
import renderWithProviders from "../../jest.setup";
import { wrapper } from "../../redux/store";

describe("Given a Layout component", () => {
  describe("When it's invoked", () => {
    test("Then it should be render a title ", async () => {
      const WrappedComponent = await wrapper.withRedux(Layout);

      renderWithProviders(<WrappedComponent />);

      const text = screen.getByText("Perfil");

      expect(text).toBeInTheDocument();
    });
  });
});
