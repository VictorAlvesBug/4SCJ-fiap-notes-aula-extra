import styled, { keyframes } from "styled-components";

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
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: calc(50% - 17px);
  top: 20px;
  z-index: 9;

  animation: ${slideDown} .4s;

  border-radius: 50%;

  background-color: var(--bgPrimary);
`;

export const Spinner = styled.div`
  margin: 10px 0px;
  width: 25px;
  height: 25px;
  /*border-top: 5px solid var(--primary);
  border-right: 5px solid transparent;*/
  border: 4px solid transparent;
  border-right-color: var(--primary);
  border-left-color: var(--primary);
  border-radius: 50%;
  animation: ${spin} .8s linear infinite;

  padding: 10px;
`;

