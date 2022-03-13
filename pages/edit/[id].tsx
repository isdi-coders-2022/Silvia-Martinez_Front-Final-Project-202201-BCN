import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPageContext,
} from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import styled from "styled-components";
import Form from "../../components/Form/Form";
import { Producto } from "../../types/Producto";

const DisplayForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface EditProductProps {
  product: Producto;
}

const EditProduct = ({ product }: EditProductProps): JSX.Element => {
  return (
    <>
      <DisplayForm>
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

export default EditProduct;
