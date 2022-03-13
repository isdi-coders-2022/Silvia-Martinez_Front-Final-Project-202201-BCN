import Image from "next/image";
import styled, { StyledComponent } from "styled-components";
import { Producto } from "../../types/Producto";
import Button from "../Button/Button";

const Card: StyledComponent<"li", {}> = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 750px;
  height: 195px;
  border: 1px solid rgba(0, 0, 0, 0.31);
  border-radius: 13px;
  background-color: rgba(229, 229, 229, 1);
  margin: 5px;
  :hover {
    border: 1px solid #fd9cca;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 218px;
  }
`;
const CardImage = styled(Image)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
  width: 220px;
  height: 195px;
  border-radius: 13px 0px 0px 13px;
  z-index: 99;

  @media (max-width: 500px) {
    border-radius: 13px 13px 0px 0px;
    width: 218px;
    height: 160px;
  }
`;

const Map: StyledComponent<"div", {}> = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  background-color: rgb(192, 255, 245);
  width: 160px;
  height: 195px;
  border-radius: 0px 13px 13px 0px;

  @media (max-width: 500px) {
    border-radius: 0px 0px 13px 13px;
    width: 218px;
    height: 100px;
  }
`;

const CardDescription: StyledComponent<"article", {}> = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 5px;
  width: 350px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  h2 {
    font-size: 16px;
    line-height: 0px;
  }
  h3 {
    font-size: 14px;
    line-height: 0px;
  }
  p {
    font-size: 12px;
  }

  @media (max-width: 500px) {
    height: 135x;
    width: 210px;
    h2 {
      font-size: 16px;
    }
    h3 {
      font-size: 12px;
    }

    p {
      font-size: 10px;
    }
  }
`;

const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin: 10px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
  }
`;

interface CardProductoProps {
  product: Producto;
  onClickDelete: () => void;
  onClickUpdate: () => void;
}

const CardProductoUser = ({
  product,
  onClickDelete,
  onClickUpdate,
}: CardProductoProps): JSX.Element => {
  return (
    <>
      <Card>
        <CardImage
          src={product.picture}
          alt={product.title}
          width={215}
          height={216}
        ></CardImage>
        <CardDescription>
          <h2>{product.price} €</h2>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p> {product.category}</p>
          <p>numero likes</p>
        </CardDescription>
        <CardButton>
          <Button text={"Editar"} onClick={onClickUpdate} />
          <Button text={"Borrar"} onClick={onClickDelete} />
        </CardButton>
        <Map></Map>
      </Card>
    </>
  );
};

export default CardProductoUser;
