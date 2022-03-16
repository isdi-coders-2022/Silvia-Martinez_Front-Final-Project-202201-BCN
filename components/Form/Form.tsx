import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  createProductThunk,
  updateProductThunk,
} from "../../redux/thunks/thunks";
import { Producto } from "../../types/Producto";
import Button from "../Button/Button";

import { useRouter } from "next/router";
import { error } from "console";
import { toast } from "react-toastify";

const StyledForm = styled.form`
  background-color: #e5e5e5;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;
  top: 120px;
  border-radius: 8px;
  max-width: 800px;
  display: flex;
  flex-direction: column;

  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const StyleLineForm = styled.div`
  color: #929090;
  display: flex;
  flex-direction: column;

  width: 100%;
`;
const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const StyleButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  bottom: 10px;
`;
const StyledInput = styled.input`
  height: 50px;
  border-style: none;
  padding-left: 10px;
  margin-top: 10px;
  border-radius: 5px;

  &:focus {
    outline: 1px solid #fd9cca;
  }
`;

interface FormProps {
  product?: Producto;
}

const Form = ({ product }: FormProps): JSX.Element => {
  let isEditing: boolean = !!product;
  let initialFields: Producto = product
    ? product
    : {
        _id: "",
        title: "",
        description: "",
        price: "",
        category: "",
        picture: "",
      };

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialFields);
  const router = useRouter();

  const onFormSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      if (product) {
        dispatch(updateProductThunk(formData));
        await router.push("/perfil");
      } else {
        dispatch(createProductThunk(formData));
        await router.push("/perfil");
      }
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
    <>
      <StyledForm onSubmit={onFormSubmit} name="form-name">
        <StyleLineForm>
          <FormBlock className="form-block">
            <label htmlFor="title">Producto:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="title"
              placeholder="Nombre del Producto"
              onChange={changeData}
              value={formData.title}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="description">Descripcion:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="description"
              placeholder="Descripcion del producto"
              onChange={changeData}
              value={formData.description}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="price">Precio:</label>
            <StyledInput
              autoComplete="off"
              type="number"
              id="price"
              min="0"
              placeholder="Precio"
              onChange={changeData}
              value={formData.price}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="category">Categoria:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="category"
              placeholder="Categoria"
              onChange={changeData}
              value={formData.category}
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
          <Button
            type="submit"
            text={isEditing ? "Modificar" : "Añadir"}
          ></Button>
        </StyleButtons>
      </StyledForm>
    </>
  );
};

export default Form;
