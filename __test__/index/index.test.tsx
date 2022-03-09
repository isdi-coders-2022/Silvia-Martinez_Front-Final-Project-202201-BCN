import renderWithProviders from "../../jest.setup";
import Home from "../../pages";

describe("Given a index page", () => {
  describe("When its invoked", () => {
    test("Then it's render", () => {
      renderWithProviders(<Home />);
    });
  });
});
