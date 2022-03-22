import { screen } from "@testing-library/react";
import { GetServerSidePropsContext } from "next";
import { act } from "react-dom/test-utils";
import renderWithProviders from "../../jest.setup";
import CategoryPage, {
  getServerSideProps,
} from "../../pages/category/[category]";
import { wrapper } from "../../redux/store";

describe("Given a category page", () => {
  describe("When it is invoked", () => {
    test("It should render a link to category page 'Deportes'", async () => {
      const WrappedComponent = await wrapper.withRedux(CategoryPage);

      const context = {
        params: { category: "deportes" },
      };

      await act(async () => {
        await getServerSideProps(
          context as unknown as GetServerSidePropsContext
        );
      });

      renderWithProviders(<WrappedComponent />);

      const image = screen.getByRole("link", { name: "Deportes" });

      expect(image).toBeInTheDocument();
    });
  });
});
