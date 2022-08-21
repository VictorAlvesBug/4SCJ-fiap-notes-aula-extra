import styled from 'styled-components';

interface PropsFab {
  positionVertically: string;
  positionHorizontally: string;
}

export const FabButtonStyled = styled.button<PropsFab>`
  position: absolute;
  
  ${(props) => {
    const posicoesPermitidas = ['top', 'bottom'];
    if (posicoesPermitidas.includes(props.positionVertically)) {
      return `${props.positionVertically}: 10px;`;
    }
    return '';
  }}

  ${(props) => {
    const posicoesPermitidas = ['left', 'right'];
    if (posicoesPermitidas.includes(props.positionHorizontally)) {
      return `${props.positionHorizontally}: 10px;`;
    }
    return '';
  }}

  color: white;

  background-color: transparent;
  color: var(--primary);
  font-size: 15px;
  font-weight: bold;

  width: 35px;
  height: 35px;
  border-radius: 20px;
  border: 2px solid var(--primary);

  box-shadow: 2px 4px 4px #0009;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    font-weight: normal;
    color: var(--white);
    background-color: #ed145b;
    box-shadow: 2px 10px 10px #0009;
  }

  span {
    font-size: 12px;
  }
`;
