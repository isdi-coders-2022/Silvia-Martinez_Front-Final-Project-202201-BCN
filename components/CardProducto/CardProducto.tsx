import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { StyledComponent } from "styled-components";
import { Producto } from "../../types/Producto";

const Card: StyledComponent<"article", {}> = styled.article`
  display: flex;
  flex-direction: column;
  width: 217px;
  height: 363px;
  border: 1px solid rgba(0, 0, 0, 0.31);
  border-radius: 13px;
  background-color: rgba(229, 229, 229, 1);
  margin: 5px;
  :hover {
    border: 1px solid #fd9cca;
  }
  @media (max-width: 500px) {
    height: 253px;
    width: 176px;
  }
`;
const CardImage = styled(Image)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 215px;
  height: 216px;
  border-radius: 13px 13px 0px 0px;
  z-index: 99;

  @media (max-width: 500px) {
    width: 174px;
    height: 170px;
  }
`;

const CardDescription: StyledComponent<"li", {}> = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;
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

interface CardProductoProps {
  product: Producto;
}

const CardProducto = ({ product }: CardProductoProps): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Card>
        <CardImage
          src={product.picture}
          alt={product.title}
          width={215}
          height={216}
        ></CardImage>
        <Link href={`/detail/${product._id}`} passHref>
          <CardDescription>
            <h2>{product.price} €</h2>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p> {product.category}</p>
          </CardDescription>
        </Link>
      </Card>
    </>
  );
};

export default CardProducto;
