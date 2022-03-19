import { render, screen } from "@testing-library/react";
import renderWithProviders from "../../jest.setup";
import DetailPage from "../../pages/detail/[id]";
import { wrapper } from "../../redux/store";
import { Producto } from "../../types/Producto";

describe("Given a detial page", () => {
  describe("When it is invoked", () => {
    test("It should render a heart icon", () => {
      const WrappedComponent = wrapper.withRedux(DetailPage);
      render(<WrappedComponent />);

      const text = screen.getByRole("img", { name: "like-icon" });

      expect(text).toBeInTheDocument();
    });
    test("It should render prodcut price: ' Mira esta producto'", () => {
      const WrappedComponent = wrapper.withRedux(DetailPage);
      render(<WrappedComponent />);

      const text = screen.getByRole("heading", { name: "Mira este producto" });

      expect(text).toBeInTheDocument();
    });
  });
});
