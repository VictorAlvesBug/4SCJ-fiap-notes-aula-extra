import { FabButtonStyled } from "./styles";

interface FBProps {
  children: React.ReactNode;
  handleClick: () => void;
  position: string
}

function FabButton({ children, handleClick, position }: FBProps) {
  return <FabButtonStyled position={position} onClick={handleClick}><p>{children}</p></FabButtonStyled>;
}

export default FabButton;
