import styled, { StyledComponent } from "styled-components";
import { Producto } from "../types/Producto";

const Title: StyledComponent<"h2", {}> = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  top: 95px;
  margin: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const ListProduct: StyledComponent<"ul", {}> = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  top: 100px;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`;

interface ProductListProps {
  products: Producto[];
}

const Perfil = (): JSX.Element => {
  return (
    <>
      <Title>Tus productos</Title>
    </>
  );
};

export default Perfil;
