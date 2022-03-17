import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const LoadingContainer = styled.section`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  p {
    color: #fd9cca;
    font-size: 30px;
    text-align: center;
  }
`;

const Loading = (): JSX.Element => {
  return (
    <LoadingContainer>
      <p>Loading...</p>
      <PuffLoader color={" #fd9cca"} size={80} />
    </LoadingContainer>
  );
};

export default Loading;
