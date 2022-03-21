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
  LoadUserThunks,
} from "../redux/thunks/thunks";
import { Producto } from "../types/Producto";
import { toast } from "react-toastify";
import PerfilUser from "../components/PerfilUser/PerfilUser";
import { User } from "../types/User";
import { logoutUserActions } from "../redux/actions/actionCreator";
import { ProductoLocation } from "../types/ProductoLocation";

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 100px;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const DisplayPerfil: StyledComponent<"div", {}> = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 1070px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Perfil = (): JSX.Element => {
  const products: ProductoLocation[] = useSelector(
    (state: RootState) => state.productsUser
  );
  const user: User = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();

  const deleteProduct = (id: string) => {
    toast("Has borrado un producto 😢");
    dispatch(deleteProductThunks(id));
  };

  const logOut = () => {
    localStorage.removeItem("token");
    toast("Hasta luego!🖖🏽");
    dispatch(logoutUserActions());
    router.push("/");
  };

  useEffect(() => {
    dispatch(loadProductsUserThunks);
    dispatch(LoadUserThunks);
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
        <PerfilUser products={products.length} user={user} onClick={logOut} />
        <ListProduct>
          {" "}
          {products.map((producto: ProductoLocation) => (
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
