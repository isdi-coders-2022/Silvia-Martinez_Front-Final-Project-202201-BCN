import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navigation } from "./Navigation";

describe("Given a navigation component", () => {
  describe("Whent it is invoked", () => {
    test("Then it is rendered text:'inicio'", () => {
      render(<Navigation />);

      const text = screen.getByText("Inicio");

      expect(text).toBeInTheDocument();
    });
  });
});
