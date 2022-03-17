import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../jest.setup";
import { registerUserThunks } from "../../redux/thunks/thunks";
import { User } from "../../types/User";
import RegisterForm from "./RegisterForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/thunks", () => ({
  registerUserThunks: jest.fn(),
}));

describe("Given a Register Form component", () => {
  describe("When it types in inputs and submit", () => {
    test("Then it should called a dispatch", () => {
      renderWithProviders(<RegisterForm />);
      const name = "Pepe";
      const username = "Pepito";
      const email = "pepe@pepe.com";
      const password = "1234";
      const user: User = {
        _id: "",
        name: "Pepe",
        username: "Pepito",
        email: "pepe@pepe.com",
        picture: "",
        password: "1234",
      };

      userEvent.type(screen.getByRole("textbox", { name: "Nombre:" }), name);
      userEvent.type(
        screen.getByRole("textbox", { name: "Username:" }),
        username
      );
      userEvent.type(screen.getByRole("textbox", { name: "Email:" }), email);
      userEvent.type(screen.getByText("password:"), password);

      userEvent.click(screen.getByRole("button", { name: "Register" }));

      expect(mockDispatch).toHaveBeenCalled();
      expect(registerUserThunks).toHaveBeenLastCalledWith(user);
    });
  });
});
