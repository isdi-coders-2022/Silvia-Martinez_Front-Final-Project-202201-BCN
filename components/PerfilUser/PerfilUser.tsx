import styled, { StyledComponent } from "styled-components";
import { Producto } from "../../types/Producto";
import { User } from "../../types/User";
import Button from "../Button/Button";

const Profile: StyledComponent<"section", {}> = styled.section`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  background-color: rgba(229, 229, 229, 1);
  width: 400px;
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

const Picture: StyledComponent<"div", {}> = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 75px;
  height: 75px;
  border: 1px solid #fd9cca;
  border-radius: 50%;
  margin-right: 20px;
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
  products: Producto[];
}

const PerfilUser = ({ user, products }: PerfilUserProps): JSX.Element => {
  return (
    <>
      <Profile>
        <Title>Tus datos</Title>
        <Card>
          <Description>
            <p>Usuario: Pepito</p>
            <p>Nombre: Pepe</p>
            <p>Tienes {products} producto subidos</p>
          </Description>
          <Picture></Picture>
        </Card>
        <StyledButton>
          <Button text="Log Out" onClick={() => {}} />
        </StyledButton>
      </Profile>
    </>
  );
};

export default PerfilUser;
