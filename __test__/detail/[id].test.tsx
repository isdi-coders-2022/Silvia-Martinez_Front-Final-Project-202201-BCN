import { screen } from "@testing-library/react";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import { act } from "react-dom/test-utils";
import renderWithProviders from "../../jest.setup";
import DetailPage, {
  getProductsId,
  getStaticPaths,
  getStaticProps,
} from "../../pages/detail/[id]";
import { wrapper } from "../../redux/store";

describe("Given a detial page", () => {
  describe("When it is invoked", () => {
    test("It should render a heart icon", async () => {
      const WrappedComponent = await wrapper.withRedux(DetailPage);

      const context = {
        params: { id: "33" },
      };

      await act(async () => {
        await getStaticProps(context as GetStaticPropsContext);
        await getStaticPaths(context as GetStaticPathsContext);
      });

      renderWithProviders(<WrappedComponent />);

      const image = screen.getByRole("img", { name: "like-icon" });

      expect(image).toBeInTheDocument();
    });
  });
});
