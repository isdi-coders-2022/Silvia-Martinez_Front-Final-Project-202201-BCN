import Image from "next/image";
import styled, { StyledComponent } from "styled-components";
import { ProductoLocation } from "../../types/ProductoLocation";
import Button from "../Button/Button";
import { Map } from "../Map/Map";

const Card: StyledComponent<"li", {}> = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 750px;
  height: 185px;
  border: 1px solid rgba(0, 0, 0, 0.31);
  border-radius: 13px;
  background-color: rgba(229, 229, 229, 1);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: 20px;
  :hover {
    border: 1px solid #fd9cca;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

    height: 500px;
    width: 200px;
  }
`;

const ImageDiv = styled.div`
  height: 185px;
  width: 240px;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    height: 120px;
    width: 200px;
  }
`;

const CardImage = styled(Image)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
  border-radius: 13px 0px 0px 13px;
  z-index: 99;

  @media (max-width: 500px) {
    border-radius: 13px 13px 0px 0px;
  }
`;

const MapContainer: StyledComponent<"div", {}> = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  width: 200px;
  height: 188px;
  border-radius: 0px 13px 13px 0px;

  @media (max-width: 500px) {
    bottom: 0;
    border-radius: 0px 0px 13px 13px;
    width: 200px;
    height: 175px;
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
    height: 105px;
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
  product: ProductoLocation;
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
        <ImageDiv>
          <CardImage
            src={product.picture}
            alt={product.title}
            width={200}
            height={200}
            layout="responsive"
            objectFit="cover"
          ></CardImage>
        </ImageDiv>
        <CardDescription>
          <h2>{product.price} €</h2>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p> {product.category}</p>
        </CardDescription>
        <CardButton>
          <Button text={"Editar"} onClick={onClickUpdate} />
          <Button text={"Borrar"} onClick={onClickDelete} />
        </CardButton>
        <MapContainer>
          <Map adress={product.adress}></Map>
        </MapContainer>
      </Card>
    </>
  );
};

export default CardProductoUser;
