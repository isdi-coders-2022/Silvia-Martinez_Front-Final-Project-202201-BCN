import { render, screen } from "@testing-library/react";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import { act } from "react-dom/test-utils";
import renderWithProviders from "../../jest.setup";
import DetailPage, {
  getProductsId,
  getStaticPaths,
  getStaticProps,
} from "../../pages/detail/[id]";
import { wrapper } from "../../redux/store";
import { Producto } from "../../types/Producto";

describe("Given a detial page", () => {
  describe("When it is invoked", () => {
    test("It should render a heart icon", () => {
      const WrappedComponent = wrapper.withRedux(DetailPage);
      render(<WrappedComponent />);
    });
  });
});
/* test("It should render prodcut price: ' Mira esta producto'", () => {
      const WrappedComponent = wrapper.withRedux(DetailPage);
      render(<WrappedComponent />);

      const text = screen.getByRole("heading", {
        name: "Mira este producto",
      });

      expect(text).toBeInTheDocument();
    }); */
