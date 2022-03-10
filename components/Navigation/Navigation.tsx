import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import styled, { StyledComponent } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logo from ".//../../public/wallaplop.jpg";

const NavList: StyledComponent<"div", {}> = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  background-color: rgba(196, 196, 196, 0.16);
  height: 100px;
  width: 100%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const Logo: StyledComponent<"div", {}> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

const List: StyledComponent<"ul", {}> = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const ListItem: StyledComponent<"li", {}> = styled.li`
  padding: 10px;
  margin: 20px;
  a {
    display: flex;
    flex-direction: column;

    text-decoration: none;
    color: black;
  }
`;

export const Navigation = (): JSX.Element => {
  return (
    <NavList>
      <Logo>
        <Image src={logo} alt={"logo"} width={50} height={50} />
      </Logo>
      <List>
        <ListItem>
          <Link href={"/"}>
            <a>
              <FontAwesomeIcon icon={faHouse} />
              <p>Inicio</p>
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/perfil"}>
            <a>
              <FontAwesomeIcon icon={faUser} />
              <p>Perfil</p>
            </a>
          </Link>
        </ListItem>
      </List>
    </NavList>
  );
};
