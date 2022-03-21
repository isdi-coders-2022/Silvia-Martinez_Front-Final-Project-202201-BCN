import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled, { StyledComponent } from "styled-components";
import { loginUserThunks } from "../../redux/thunks/thunks";
import { User } from "../../types/User";
import Button from "../Button/Button";

const StyledForm: StyledComponent<"form", {}> = styled.form`
  background-color: #e5e5e5;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 8px;
  max-width: 800px;
  display: flex;
  flex-direction: column;

  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const StyleLineForm: StyledComponent<"div", {}> = styled.div`
  color: #929090;
  display: flex;
  flex-direction: column;

  width: 100%;
`;
const FormBlock: StyledComponent<"div", {}> = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const StyledInput: StyledComponent<"input", {}> = styled.input`
  height: 50px;
  border-style: none;
  padding-left: 10px;
  margin-top: 10px;
  border-radius: 5px;

  &:focus {
    outline: 1px solid #fd9cca;
  }
`;

const StyleButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  bottom: 10px;
`;

const LoginForm = () => {
  const router = useRouter();

  const initialFields: User = {
    _id: "",
    name: "",
    username: "",
    email: "",
    picture: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFields);
  const dispatch = useDispatch();

  const onFormSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      dispatch(loginUserThunks(formData));
      await router.push("/perfil");
    } catch (error) {
      toast("no ha funcionado");
    }
  };

  const changeData = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <StyledForm onSubmit={onFormSubmit} name="form-name">
      <StyleLineForm>
        <FormBlock className="form-block">
          <label htmlFor="username">username: </label>
          <StyledInput
            autoComplete="off"
            type="text"
            id="username"
            placeholder="Username"
            onChange={changeData}
            value={formData.username}
          />
        </FormBlock>
        <FormBlock className="form-block">
          <label htmlFor="password">password: </label>
          <StyledInput
            autoComplete="off"
            type="password"
            id="password"
            placeholder="Password"
            onChange={changeData}
            value={formData.password}
          />
        </FormBlock>
      </StyleLineForm>
      <StyleButtons>
        <Button type="submit" text={"Log In"}></Button>
      </StyleButtons>
    </StyledForm>
  );
};

export default LoginForm;
