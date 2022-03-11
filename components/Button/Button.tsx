import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #c4c4c4;
  border-color: #fd9cca;
  border-radius: 8px;
  width: 65px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 4px 8px 4px 6px;
  margin-bottom: 5px;
`;

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button = ({ onClick, text }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
