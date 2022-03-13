import type { NextPage, NextPageContext } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/ProdcutList/ProductList";
import { RootState } from "../redux/store";
import { loadProductsThunks } from "../redux/thunks/thunks";

const Home: NextPage = (): JSX.Element => {
  const products = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsThunks);
  }, [dispatch]);

  return <ProductList products={products} />;
};

export default Home;

/* const getServerSideProps = (context: NextPageContext) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/list`
  );
  const jsonRespone: ProductsResponse = await response.json();

  return {
    props: {
      products: jsonRespone,
    },
  };
};
 */
