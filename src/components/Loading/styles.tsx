import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  0% {
        transform: translateY(-50px) scale(0);
    }
`;

const spin = keyframes`
  100% {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: calc(50% - 17px);
  top: 20px;
  z-index: 9;

  animation: ${slideDown} 0.4s;

  border-radius: 50%;

  background-color: var(--bgPrimary);

  :after {
    content: '';
    position: relative;
    margin: 10px 0px;
    width: 25px;
    height: 25px;
    border: 4px solid transparent;
    border-right-color: var(--primary);
    border-left-color: var(--primary);
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
  }
`;
