import type { NextPage } from "next";
import { useSelector } from "react-redux";
import styled, { StyledComponent } from "styled-components";
import Categorias from "../components/Categorias/Categorias";
import ProductList from "../components/ProdcutList/ProductList";
import { RootState, wrapper } from "../redux/store";
import { loadProductsThunks } from "../redux/thunks/thunks";

const DisplayHome: StyledComponent<"div", {}> = styled.div`
  position: relative;
  top: 99px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 10vh;
`;
const Title: StyledComponent<"h2", {}> = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  margin: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Home: NextPage = (): JSX.Element => {
  const products = useSelector((state: RootState) => state.products);
  return (
    <>
      <DisplayHome>
        <Categorias />
        <Title>Cerca de ti</Title>
        <ProductList products={products} />
      </DisplayHome>
    </>
  );
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await loadProductsThunks(store.dispatch);
    return {
      props: {},
    };
  }
);
