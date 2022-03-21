import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useSelector } from "react-redux";
import styled, { StyledComponent } from "styled-components";
import CardDetail from "../../components/CardDetail/CardDetail";
import { RootState, wrapper } from "../../redux/store";
import { loadProductThunks } from "../../redux/thunks/thunks";
import { Producto } from "../../types/Producto";
import { ProductoLocation } from "../../types/ProductoLocation";

const DisplayCard: StyledComponent<"div", {}> = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailPage = (): JSX.Element => {
  const product: ProductoLocation = useSelector(
    (state: RootState) => state.product
  );

  return (
    <>
      <DisplayCard>
        <CardDetail product={product} />
      </DisplayCard>
    </>
  );
};

export const getProductsId = async (context?: GetStaticPropsContext) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/list`
  );
  const productsID = await response.json();
  const productos = productsID.products;

  return productos.map((product: Producto) => {
    return {
      params: {
        id: product._id,
      },
    };
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const id = await getProductsId();
  return {
    paths: id,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const id = context.params?.id;
    await store.dispatch<any>(loadProductThunks(id as string));
    return {
      props: { id },
      revalidate: 60,
    };
  }
);

export default DetailPage;
