import type { NextPage } from "next";
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
