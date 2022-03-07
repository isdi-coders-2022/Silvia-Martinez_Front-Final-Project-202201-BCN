import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavList = styled.div`
  display: block;
  background-color: #c4c4c4;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
`;

export const Navigation = () => {
  return (
    <NavList>
      <List>
        <ListItem>
          <FontAwesomeIcon icon={faHouse} />
          Inicio
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faUser} />
          Perfil
        </ListItem>
      </List>
    </NavList>
  );
};
