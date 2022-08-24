import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: scale(0.2) rotate(180deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`;

export const Container = styled.article`
  height: 250px;
  padding: 10px;
  position: relative;

  color: var(--white);
  background-color: var(--primary);
  box-shadow: 2px 2px 10px #00000099;

  animation: ${fadeIn} ease-in 0.5s;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .note-header > span:first-child {
    font-size: 16px;
    font-weight: bold;
  }

  div > span {
    font-size: 14px;
    margin-bottom: 10px;
    color: var(--gray);
  }

  p.note-text {
    background-color: #ef6894;
    height: 72%;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .material-icons {
    bottom: 5px;
    right: 5px;

    font-size: 32px;
    cursor: pointer;
    transition: 0.3s;
  }

  .material-icons:not(#priority):hover {
    color: #333;
    transform: scale(1.1);
    transform: rotate(360deg);
  }

  .priority-note {
    position: absolute;
  }

  .actions-container {
    display: flex;
    justify-content: flex-end;
    padding: 5px 0;
  }

  .edit-note {
  }

  #priority {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: fit-content;
  }

  width: 100%;

  @media (min-width: 576px) {
    width: calc((100% - 20px * 3) / 2);
  }
  
  @media (min-width: 768px) {
    width: calc((100% - 20px * 4) / 3);
  }
  
`;
