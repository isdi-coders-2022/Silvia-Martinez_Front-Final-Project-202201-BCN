import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import styled, { StyledComponent } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logo from ".//../../public/wallaplop.jpg";
import { useEffect, useState } from "react";

const NavList: StyledComponent<"div", {}> = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 0;
  border-bottom: 2px solid rgba(196, 196, 196, 0.16);
  height: 100px;
  width: 100%;
  background-color: white;
`;
const Logo: StyledComponent<"div", {}> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  margin: 30px;
`;

const List: StyledComponent<"ul", {}> = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
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

  :hover {
    svg {
      color: #fd9cca;
      cursor: pointer;
    }
    p {
      color: #fd9cca;
    }
  }
`;

export const Navigation = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <NavList>
      <Link href={"/"}>
        <a>
          <Logo>
            <Image src={logo} alt={"logo"} width={50} height={50} />
          </Logo>
        </a>
      </Link>
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
          {isLoggedIn && (
            <Link href={"/perfil"}>
              <a>
                <FontAwesomeIcon icon={faUser} />
                <p>Perfil</p>
              </a>
            </Link>
          )}
          {!isLoggedIn && (
            <Link href={"/login"}>
              <a>
                <FontAwesomeIcon icon={faUser} />
                <p>Perfil</p>
              </a>
            </Link>
          )}
        </ListItem>
      </List>
    </NavList>
  );
};
