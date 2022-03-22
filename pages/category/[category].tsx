import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { useSelector } from "react-redux";
import styled, { StyledComponent } from "styled-components";
import CardProducto from "../../components/CardProducto/CardProducto";
import Categorias from "../../components/Categorias/Categorias";
import { RootState, wrapper } from "../../redux/store";
import { loadProductsThunks } from "../../redux/thunks/thunks";
import { Producto } from "../../types/Producto";

const DisplayCategoryPage: StyledComponent<"div", {}> = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
`;

const ListProduct: StyledComponent<"ul", {}> = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  top: 110px;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`;

interface CategoryPageProps {
  category: string;
}

const CategoryPage = ({ category }: CategoryPageProps): JSX.Element => {
  const productos: Producto[] = useSelector(
    (state: RootState) => state.products
  );
  return (
    <>
      <DisplayCategoryPage>
        <Categorias></Categorias>
        <ListProduct>
          {productos
            .filter((producto) => producto.category === category)
            .map((producto) => {
              return (
                <CardProducto
                  key={producto._id}
                  product={producto}
                ></CardProducto>
              );
            })}
        </ListProduct>
      </DisplayCategoryPage>
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const category = context.params?.category;
    await loadProductsThunks(store.dispatch);
    return {
      props: { category },
    };
  });

export default CategoryPage;
