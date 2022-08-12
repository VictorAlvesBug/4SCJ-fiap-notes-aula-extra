import styled from "styled-components";

export const FabButtonStyled = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  color: white;

  background-color: transparent;
  color: var(--primary);
  font-size: 15px;
  font-weight: bold;
  
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border: 0px;
  
  box-shadow: 2px 4px 4px #0009;
  transition: 0.2s;
  cursor: pointer;
  
  :hover {
    font-weight: normal;
    color: var(--white);
    background-color: #ed145b;
    box-shadow: 2px 10px 10px #0009;
    transform: scale(2) translateX(5px) translateY(5px);
  }
`;
