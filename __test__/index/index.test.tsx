import { render, screen } from "@testing-library/react";
import { GetServerSidePropsContext } from "next";
import { act } from "react-dom/test-utils";
import renderWithProviders from "../../jest.setup";
import Home, { getServerSideProps } from "../../pages";
import { wrapper } from "../../redux/store";

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

describe("Given the index page", () => {
  describe("When getServerSideProps is called", () => {
    test("Then it hydrates redux with the list of products", async () => {
      const WrappedComponent = await wrapper.withRedux(Home);

      renderWithProviders(<WrappedComponent />);
      await act(async () => {
        await getServerSideProps({} as GetServerSidePropsContext);
      });

      const text = await screen.findByRole("heading", { name: "10 €" });

      expect(text).toBeInTheDocument();
    });
  });
});
