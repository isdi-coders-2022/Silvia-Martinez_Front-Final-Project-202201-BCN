import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navigation } from "./Navigation";
import renderWithProviders from "../../jest.setup";
import { wrapper } from "../../redux/store";

describe("Given a navigation component", () => {
  describe("Whent it is invoked", () => {
    test("Then it is rendered text:'inicio'", async () => {
      const WrappedComponent = await wrapper.withRedux(Navigation);

      renderWithProviders(<WrappedComponent />);

      const text = screen.getByText("Inicio");

      expect(text).toBeInTheDocument();
    });
  });
});
