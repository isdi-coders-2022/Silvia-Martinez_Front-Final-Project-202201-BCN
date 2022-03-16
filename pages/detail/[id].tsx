import { GetServerSideProps, GetServerSidePropsContext } from "next";
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
  return (
    <>
      <DisplayCard>
        {!product && <Loading />}
        <CardDetail product={product} />
      </DisplayCard>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/list`
  );

  const responseBody = await response.json();
  const product: Producto[] = responseBody.products.find(
    (responseProduct: Producto) => {
      return responseProduct._id === context.params?.id;
    }
  );

  return {
    props: {
      product,
    },
  };
};
export default DetailPage;
