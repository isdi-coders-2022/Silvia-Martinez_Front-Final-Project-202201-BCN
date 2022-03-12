import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Given a Button Component", () => {
  describe("When is rendered", () => {
    test("It should render a button", () => {
      const action: jest.Mock<any> = jest.fn();

      const text = "click";

      render(<Button text={text} onClick={action} />);

      const button: HTMLElement = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });
  describe("When it is clicked", () => {
    test("It should do an action", () => {
      const action = jest.fn();

      const text = "click";

      render(<Button text={text} onClick={action} />);

      const button: HTMLElement = screen.getByRole("button");
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
