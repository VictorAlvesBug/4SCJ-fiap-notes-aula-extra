import styled from 'styled-components';

export const FilterInputStyled = styled.input`
  color: var(--primary);
  background-color: var(--bgPrimary);
  flex-grow: 1;
  margin-right: 50px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;

  :hover {
    background-color: #444;
  }

  ::placeholder {
  color: gray;
  opacity: 1;
}
`;
