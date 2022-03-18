import Image, { ImageProps } from "next/image";
import styled, { StyledComponent } from "styled-components";
import { Producto } from "../../types/Producto";
import { User } from "../../types/User";
import Button from "../Button/Button";

const Profile: StyledComponent<"div", {}> = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgba(229, 229, 229, 1);
  width: 300px;
  height: 300px;
  border-radius: 13px;
  border: 2px solid #fd9cca;
  margin: 20px;
`;

const Title: StyledComponent<"h3", {}> = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
`;

const Description: StyledComponent<"section", {}> = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ImageDiv = styled.div`
  height: 100px;
  width: 100px;
  margin-right: 20px;
  border-radius: 50%;
`;

const Picture = styled(Image)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: pink;
  border-radius: 50%;
  z-index: 99;
`;

const Card: StyledComponent<"div", {}> = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton: StyledComponent<"div", {}> = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface PerfilUserProps {
  user: User;
  products: number;
}

const PerfilUser = ({ user, products }: PerfilUserProps): JSX.Element => {
  return (
    <>
      <Profile>
        <Title>Tus datos</Title>
        <Card>
          <Description>
            <p>Usuario: {user.username}</p>
            <p>Nombre: {user.name}</p>
            <p>Tienes {products} producto subidos</p>
          </Description>
          <ImageDiv>
            <Picture
              src={user.picture}
              alt={user.name}
              width={50}
              height={50}
              layout="responsive"
              objectFit="cover"
            />
          </ImageDiv>
        </Card>
        <StyledButton>
          <Button text="Log Out" onClick={() => {}} />
        </StyledButton>
      </Profile>
    </>
  );
};

export default PerfilUser;
