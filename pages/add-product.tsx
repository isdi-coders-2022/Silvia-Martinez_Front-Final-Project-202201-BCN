import styled from "styled-components";
import Form from "../components/Form/Form";

const DisplayForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddProduct = (): JSX.Element => {
  return (
    <>
      <DisplayForm>
        <Form></Form>
      </DisplayForm>
    </>
  );
};

export default AddProduct;
