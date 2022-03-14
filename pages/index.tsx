import type { NextPage } from "next";
import { useSelector } from "react-redux";
import ProductList from "../components/ProdcutList/ProductList";
import { RootState, wrapper } from "../redux/store";
import { loadProductsThunks } from "../redux/thunks/thunks";

const Home: NextPage = (): JSX.Element => {
  const products = useSelector((state: RootState) => state.products);
  return <ProductList products={products} />;
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(loadProductsThunks);
    return {
      props: {},
    };
  }
);
