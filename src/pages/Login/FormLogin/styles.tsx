import styled, { keyframes } from "styled-components";
import { Form as FormikForm } from "formik";

const fadeIn = keyframes`
  from {
    transform: translateY(-300px);
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  border-radius: 10px;
  background-color: var(--bgPrimary);
  box-shadow: 0px 4px 10px var(--bgPrimary), 0px 10px 40px var(--bgPrimary);

  animation: ${fadeIn} 0.3s;

  h1 {
    align-self: center;
    margin-bottom: 10px;
  }

  a {
    color: var(--white);
    align-self: center;

    :hover {
      color: var(--primary);
    }
  }
`;
