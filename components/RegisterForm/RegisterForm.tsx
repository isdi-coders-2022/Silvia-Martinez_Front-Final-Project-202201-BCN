import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled, { StyledComponent } from "styled-components";
import { registerUserThunks } from "../../redux/thunks/thunks";
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

const RegisterForm = () => {
  const initialFields = {
    _id: "",
    name: "",
    username: "",
    email: "",
    picture: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFields);
  const dispatch = useDispatch();
  const router = useRouter();

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      dispatch(registerUserThunks(formData));
      await router.push("/login");
    } catch (error) {
      toast("No hemos podido registrarte");
    }
  };

  const changeData = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? (
              (event as React.ChangeEvent<HTMLInputElement>).target
                .files as FileList
            )[0]
          : event.target.value,
    });
  };

  return (
    <StyledForm onSubmit={onFormSubmit} name="form-name">
      <StyleLineForm>
        <FormBlock className="form-block">
          <label htmlFor="name">Nombre: </label>
          <StyledInput
            autoComplete="off"
            type="text"
            id="name"
            placeholder="Pon tu nombre 🐨"
            onChange={changeData}
            value={formData.name}
            maxLength={50}
            minLength={1}
            required
          />
        </FormBlock>
        <FormBlock className="form-block">
          <label htmlFor="username">Username: </label>
          <StyledInput
            autoComplete="off"
            type="text"
            id="username"
            placeholder="Inventate un nombre de usuario🦄"
            onChange={changeData}
            value={formData.username}
            maxLength={50}
            minLength={1}
            required
          />
        </FormBlock>
        <FormBlock className="form-block">
          <label htmlFor="password">password: </label>
          <StyledInput
            autoComplete="off"
            type="password"
            id="password"
            placeholder="password 🙈"
            onChange={changeData}
            value={formData.password}
            maxLength={50}
            minLength={1}
            required
          />
        </FormBlock>
        <FormBlock className="form-block">
          <label htmlFor="email">Email: </label>
          <StyledInput
            autoComplete="off"
            type="email"
            id="email"
            placeholder="email"
            onChange={changeData}
            value={formData.email}
            maxLength={50}
            minLength={1}
          />
        </FormBlock>
        <FormBlock className="form-block">
          <label htmlFor="picture">Imagen:</label>
          <StyledInput
            autoComplete="off"
            type="file"
            id="picture"
            placeholder="Imagen"
            onChange={changeData}
          />
        </FormBlock>
      </StyleLineForm>
      <StyleButtons>
        <Button type="submit" text={"Register"}></Button>
      </StyleButtons>
    </StyledForm>
  );
};

export default RegisterForm;
