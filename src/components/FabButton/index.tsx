import { FabButtonStyled } from "./styles";

interface FBProps {
  children: React.ReactNode;
  handleClick: () => void;
  positionHorizontally: string
  positionVertically: string
}

function FabButton({ children, handleClick, positionHorizontally, positionVertically }: FBProps) {
  return <FabButtonStyled 
    positionHorizontally={positionHorizontally} 
    positionVertically={positionVertically} 
    onClick={handleClick}>
      <p>{children}</p>
      </FabButtonStyled>;
}

export default FabButton;
