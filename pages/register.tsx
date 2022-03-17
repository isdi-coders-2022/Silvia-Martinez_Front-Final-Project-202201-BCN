import Link from "next/link";
import styled from "styled-components";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const DisplayForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  justify-content: space-between;
  position: relative;
  top: 100px;
`;

const Register = () => {
  return (
    <>
      <DisplayForm>
        <h3>Register!</h3>
        <RegisterForm />
        <p>
          Now you can Log In <Link href={"/login"}>here</Link>
        </p>
      </DisplayForm>
    </>
  );
};

export default Register;
