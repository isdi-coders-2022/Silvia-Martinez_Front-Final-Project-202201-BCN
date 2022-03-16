import type { NextPage } from "next";
import { useSelector } from "react-redux";
import styled, { StyledComponent } from "styled-components";
import Loading from "../components/Loading/Loading";
import ProductList from "../components/ProdcutList/ProductList";
import { RootState, wrapper } from "../redux/store";
import { loadProductsThunks } from "../redux/thunks/thunks";

const Title: StyledComponent<"h2", {}> = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px;
  position: relative;
  top: 95px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Home: NextPage = (): JSX.Element => {
  const products = useSelector((state: RootState) => state.products);
  return (
    <>
      <Title>Cerca de ti</Title>
      {!products && <Loading />}
      <ProductList products={products} />
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
