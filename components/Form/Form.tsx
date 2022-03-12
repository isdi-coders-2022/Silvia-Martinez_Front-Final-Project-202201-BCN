import styled from "styled-components";
import Button from "../Button/Button";

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

const Form = () => {
  return (
    <>
      <StyledForm>
        <StyleLineForm>
          <FormBlock className="form-block">
            <label htmlFor="title">Producto:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="titel"
              placeholder="Nombre del Producto"
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="description">Descripcion:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="description"
              placeholder="Descripcion del producto"
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
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="categorie">Categoria:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="categorie"
              placeholder="Categoria"
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="picture">Imagen:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="picture"
              placeholder="Imagen"
            />
          </FormBlock>
        </StyleLineForm>
        <StyleButtons>
          <Button text="Añadir" onClick={() => {}}></Button>
        </StyleButtons>
      </StyledForm>
    </>
  );
};

export default Form;
