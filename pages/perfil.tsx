import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { StyledComponent } from "styled-components";
import Button from "../components/Button/Button";
import CardProductoUser from "../components/CardProductoUser/CardProductoUser";
import { RootState } from "../redux/store";
import {
  deleteProductThunks,
  loadProductsUserThunks,
} from "../redux/thunks/thunks";
import { Producto } from "../types/Producto";

const DisplayTitle: StyledComponent<"section", {}> = styled.section`
  display: flex;
  flex: row;
  position: relative;
  top: 95px;
  align-items: center;
  justify-content: space-between;
`;

const Title: StyledComponent<"h2", {}> = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const ListProduct: StyledComponent<"ul", {}> = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  top: 100px;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`;

const Perfil = (): JSX.Element => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const router = useRouter();

  const deleteProduct = (id: string) => {
    dispatch(deleteProductThunks(id));
  };

  useEffect(() => {
    dispatch(loadProductsUserThunks);
  }, [dispatch]);

  return (
    <>
      <DisplayTitle>
        <Title>Tus productos</Title>
        <Button
          text={"Añadir producto"}
          onClick={() => router.push("/add-product")}
        />
      </DisplayTitle>
      <ListProduct>
        {" "}
        {products.map((producto: Producto) => (
          <CardProductoUser
            key={producto._id}
            product={producto}
            onClick={() => deleteProduct(producto._id)}
          />
        ))}{" "}
      </ListProduct>
    </>
  );
};

export default Perfil;
