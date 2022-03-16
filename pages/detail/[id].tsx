import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import styled, { StyledComponent } from "styled-components";
import CardDetail from "../../components/CardDetail/CardDetail";
import Loading from "../../components/Loading/Loading";
import { Producto } from "../../types/Producto";

const DisplayCard: StyledComponent<"div", {}> = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface DetailProductProps {
  product: Producto;
}

const DetailPage = ({ product }: DetailProductProps): JSX.Element => {
  if (!product) {
    return <Loading />;
  }
  return (
    <>
      <DisplayCard>
        <CardDetail product={product} />
      </DisplayCard>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/list`
  );
  const responseBody = await response.json();
  const product: Producto[] = responseBody.products.find(
    (responseProduct: Producto) => {
      return responseProduct._id === params?.id;
    }
  );

  return {
    props: { product },
    revalidate: 60,
  };
};

export default DetailPage;
