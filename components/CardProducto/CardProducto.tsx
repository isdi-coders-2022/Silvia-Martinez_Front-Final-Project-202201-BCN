import styled, { StyledComponent } from "styled-components";

const Card: StyledComponent<"article", {}> = styled.article`
  display: flex;
  flex-direction: column;
  width: 217px;
  height: 363px;
  border: 1px solid rgba(0, 0, 0, 0.31);
  border-radius: 13px;
  background-color: rgba(229, 229, 229, 1);
  margin: 20px;
  :hover {
    border: 1px solid #fd9cca;
  }
  @media (max-width: 400px) {
    height: 253px;
    width: 176px;
  }
`;
const CardImage: StyledComponent<"section", {}> = styled.section`
  display: flex;
  background-color: #9c9999;
  flex-direction: column;
  align-items: flex-start;
  width: 215px;
  height: 216px;
  border-radius: 13px 13px 0px 0px;

  @media (max-width: 400px) {
    width: 174px;
    height: 170px;
  }
`;

const CardDescription: StyledComponent<"section", {}> = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;

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

  @media (max-width: 400px) {
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

const CardProducto = (): JSX.Element => {
  return (
    <>
      <Card>
        <CardImage></CardImage>
        <CardDescription>
          <h2>Precio</h2>
          <h3>titulo</h3>
          <p>Descripcion producto</p>
          <p> Categoria</p>
        </CardDescription>
      </Card>
    </>
  );
};

export default CardProducto;
