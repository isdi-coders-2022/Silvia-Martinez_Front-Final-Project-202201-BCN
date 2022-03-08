import { render } from "@testing-library/react";
import { Navigation } from "./Navigation";

describe("Given a navigation component", () => {
  describe("Whent it is invoked", () => {
    test("Then it is rendered text:'inicio'", () => {
      render(<Navigation />);
    });
  });
});
