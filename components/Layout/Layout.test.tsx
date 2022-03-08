import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Layout } from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's invoked", () => {
    test("Then it should be render a title ", () => {
      render(
        <Layout>
          <div></div>
        </Layout>
      );

      const text = screen.getByText("Perfil");

      expect(text).toBeInTheDocument();
    });
  });
});
