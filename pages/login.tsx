import Link from "next/link";
import styled from "styled-components";
import LoginForm from "../components/LoginForm/LoginForm";

const DisplayForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  justify-content: space-between;
  position: relative;
  top: 100px;
`;

const Login = () => {
  return (
    <>
      <DisplayForm>
        <h3>Log In!</h3>
        <LoginForm />
        <p>
          Create a new account <Link href={"/register"}>here</Link>
        </p>
      </DisplayForm>
    </>
  );
};

export default Login;
