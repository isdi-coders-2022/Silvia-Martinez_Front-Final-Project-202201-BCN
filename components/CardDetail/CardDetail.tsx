import Image from "next/image";
import styled, { StyledComponent } from "styled-components";
import { Producto } from "../../types/Producto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Card: StyledComponent<"article", {}> = styled.article`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 550px;
  border: 1px solid rgba(0, 0, 0, 0.31);
  border-radius: 13px;
  background-color: rgba(229, 229, 229, 1);
  margin: 5px;

  @media (max-width: 500px) {
    height: 300px;
    width: 200px;
  }
`;
const CardImage = styled(Image)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
  position: relative;
`;
const CardHead: StyledComponent<"section", {}> = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  svg:hover {
    color: #fd9cca;
    cursor: pointer;
  }
`;
const CardDescription: StyledComponent<"li", {}> = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;

  h2 {
    font-size: 16px;
    line-height: 2px;
  }
  h3 {
    font-size: 14px;
    line-height: 2px;
  }
  p {
    font-size: 12px;
  }

  @media (max-width: 500px) {
    height: 83px;
    h2 {
      font-size: 16px;
    }
    h3 {
      font-size: 12px;
    }

    p {
      display: none;
    }
  }
`;

const Map: StyledComponent<"div", {}> = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  border-radius: 0px 0px 13px 13px;
  z-index: 99;
  background-color: blueviolet;
  bottom: 0;

  @media (max-width: 500px) {
    width: 174px;
    height: 170px;
  }
`;

interface CardDetailProps {
  product: Producto;
}

const CardDetail = ({ product }: CardDetailProps): JSX.Element => {
  return (
    <>
      <Card>
        <CardHead>
          <p>Nombre Usuario</p>
          <FontAwesomeIcon icon={faHeart} title={"like-icon"} />
        </CardHead>
        <CardImage
          src={product.picture}
          alt={product.title}
          height={250}
          width={250}
          layout="responsive"
          objectFit="cover"
        ></CardImage>
        <CardDescription>
          <h2>{product.price} €</h2>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p> {product.category}</p>
        </CardDescription>
        <Map></Map>
      </Card>
    </>
  );
};

export default CardDetail;
