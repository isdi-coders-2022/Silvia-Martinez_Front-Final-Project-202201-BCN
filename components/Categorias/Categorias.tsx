import {
  faBasketballBall,
  faCar,
  faCouch,
  faGamepad,
  faShirt,
  faTv,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled, { StyledComponent } from "styled-components";

const CategoriasStyled: StyledComponent<"div", {}> = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 120px;

  .slider {
    width: 100%;
    height: 110px;
    overflow-x: auto;
    scrollbar-width: none;
    overflow-y: hidden;
    @media (max-width: 900px) {
      width: 80vw;
      height: 180px;
    }
  }

  .slider::-webkit-scrollbar {
    display: none;
  }
  .slide {
    display: flex;
    justify-content: center;
    width: 140px;
  }
`;

const List: StyledComponent<"ul", {}> = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
`;

const ListItem: StyledComponent<"li", {}> = styled.li`
  padding: 10px;
  margin: 20px;
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
  }
  svg {
    color: #fd9cca;
  }
  p {
    color: grey;
    font-size: 12px;
  }
  :hover {
    border-bottom: 1px solid #fd9cca;
    p {
      font-size: 16px;
    }
  }
`;

const Categorias = () => {
  return (
    <>
      <CategoriasStyled>
        <div className="slider">
          <List>
            <ListItem>
              <div className="slide">
                <Link href={"/category/cocina"}>
                  <a>
                    <FontAwesomeIcon icon={faUtensils} />
                    <p>Cocina</p>
                  </a>
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="slide">
                <Link href={"/category/deportes"}>
                  <a>
                    <FontAwesomeIcon icon={faBasketballBall} />
                    <p>Deportes</p>
                  </a>
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="slide">
                <Link href={"/category/electrodomesticos"}>
                  <a>
                    <FontAwesomeIcon icon={faTv} />
                    <p>Electrodomesticos</p>
                  </a>
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="slide">
                <Link href={"/category/hogar"}>
                  <a>
                    <FontAwesomeIcon icon={faCouch} />
                    <p>Hogar</p>
                  </a>
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="slide">
                <Link href={"/category/moda"}>
                  <a>
                    <FontAwesomeIcon icon={faShirt} />
                    <p>Moda</p>
                  </a>
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="slide">
                <Link href={"/category/motor"}>
                  <a>
                    <FontAwesomeIcon icon={faCar} />
                    <p>Motor</p>
                  </a>
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="slide">
                <Link href={"/category/videojuegos"}>
                  <a>
                    <FontAwesomeIcon icon={faGamepad} />
                    <p>Videojuegos</p>
                  </a>
                </Link>
              </div>
            </ListItem>
          </List>
        </div>
      </CategoriasStyled>
    </>
  );
};

export default Categorias;
