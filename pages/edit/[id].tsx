import { GetServerSideProps, GetServerSidePropsContext } from "next";
import styled from "styled-components";
import Form from "../../components/Form/Form";
import Loading from "../../components/Loading/Loading";
import { ProductoLocation } from "../../types/ProductoLocation";

const DisplayForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface EditProductProps {
  product: ProductoLocation;
}

const EditProduct = ({ product }: EditProductProps): JSX.Element => {
  return (
    <>
      <DisplayForm>
        {!product && <Loading />}
        <Form product={product}></Form>
      </DisplayForm>
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
  const product: ProductoLocation[] = responseBody.products.find(
    (responseProduct: ProductoLocation) => {
      return responseProduct._id === context.params?.id;
    }
  );

  return {
    props: {
      product,
    },
  };
};

export default EditProduct;
