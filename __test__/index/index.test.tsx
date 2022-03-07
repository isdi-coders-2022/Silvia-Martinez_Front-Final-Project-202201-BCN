import { render } from "@testing-library/react";
import Home from "../../pages";

describe("Given a index page", () => {
  describe("When its invoked", () => {
    test("Then it's render", () => {
      render(<Home />);
    });
  });
});
