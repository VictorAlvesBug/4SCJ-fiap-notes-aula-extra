import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 5px 10px;
  min-width: 100px;

  background-color: transparent;
  cursor: pointer;
  transition: 0.2s;
  border: 1px solid var(--white);
  border-radius: 5px;
  font-weight: bold;
  color: var(--white);

  :hover {
    box-shadow: 0px 4px 10px var(--bgPrimary);
  }

  :active {
    transform: scale(0.95);
  }
`;
