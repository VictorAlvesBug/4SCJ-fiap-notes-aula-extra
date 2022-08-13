import styled from 'styled-components';

export const SortOptionStyled = styled.div`
  color: var(--primary);
  background-color: var(--bgPrimary);
  width: 50px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;

  :hover {
  background-color: #222;
  }

&.selected-forward,
&.selected-backward {
  border: 1px solid var(--primary);
}

&.selected-forward:after,
&.selected-backward:after{
    content: '';
    position: relative;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-left-width: 4px;
    border-right-width: 4px;
}

&.selected-forward:after{
    border-bottom-color: var(--primary);
    border-top-width: 0;
}

&.selected-backward:after{
    border-top-color: var(--primary);
    border-bottom-width: 0;
}
`;
