import { FabButtonStyled } from "./styles";

interface FBProps {
  children: React.ReactNode;
  handleClick: () => void;
}

function FabButton({ children, handleClick }: FBProps) {
  return <FabButtonStyled onClick={handleClick}><p>{children}</p></FabButtonStyled>;
}

export default FabButton;
