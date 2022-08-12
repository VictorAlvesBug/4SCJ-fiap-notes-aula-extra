import { ButtonStyled } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

function Button({ children, handleClick }: ButtonProps) {
  return <ButtonStyled onClick={handleClick}>{children}</ButtonStyled>;
}

export default Button;
