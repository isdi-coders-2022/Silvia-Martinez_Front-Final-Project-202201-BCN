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
import { toast } from "react-toastify";
import Loading from "../components/Loading/Loading";
import PerfilUser from "../components/PerfilUser/PerfilUser";

const DisplayTitle: StyledComponent<"section", {}> = styled.section`
  display: flex;
  flex: row;
  position: relative;
  top: 95px;
  align-items: center;
  margin-right: 20px;
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
  align-items: center;
  justify-content: center;
  position: relative;
  top: 100px;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`;

const DisplayPerfil: StyledComponent<"div", {}> = styled.div`
  display: flex;
`;

const Perfil = (): JSX.Element => {
  const products = useSelector((state: RootState) => state.products);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const deleteProduct = (id: string) => {
    toast("Has borrado un producto 😢");
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
      <DisplayPerfil>
        <PerfilUser products={products.length} user={user} />
        {!products && <Loading />}
        <ListProduct>
          {" "}
          {products.map((producto: Producto) => (
            <CardProductoUser
              key={producto._id}
              product={producto}
              onClickDelete={() => deleteProduct(producto._id)}
              onClickUpdate={() => router.push(`/edit/${producto._id}`)}
            />
          ))}{" "}
        </ListProduct>
      </DisplayPerfil>
    </>
  );
};

export default Perfil;
