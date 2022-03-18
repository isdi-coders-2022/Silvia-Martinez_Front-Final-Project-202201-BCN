import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../jest.setup";
import { loginUserThunks } from "../../redux/thunks/thunks";
import { User } from "../../types/User";
import LoginForm from "./LoginForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/thunks", () => ({
  loginUserThunks: jest.fn(),
}));

describe("Given a Form Login component", () => {
  describe("When it types in inputs and submit", () => {
    test("Then it should called a dispatch", () => {
      renderWithProviders(<LoginForm />);

      const username = "Pepito";
      const password = "1234";
      const user: User = {
        _id: "",
        name: "",
        username: "Pepito",
        email: "",
        picture: "",
        password: "1234",
      };

      userEvent.type(
        screen.getByRole("textbox", { name: "username:" }),
        username
      );
      userEvent.type(screen.getByText("password:"), password);

      userEvent.click(screen.getByRole("button", { name: "Log In" }));

      expect(mockDispatch).toHaveBeenCalled();
      expect(loginUserThunks).toHaveBeenLastCalledWith(user);
    });
  });
});
