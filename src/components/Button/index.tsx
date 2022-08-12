import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  handleClick?: () => void;
}

function Button({ children, handleClick, ...rest }: ButtonProps) {
  return <ButtonStyled {...rest} onClick={handleClick}>{children}</ButtonStyled>;
}

export default Button;
