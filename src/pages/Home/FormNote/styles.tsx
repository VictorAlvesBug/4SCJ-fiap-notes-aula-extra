import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;

  textarea {
    height: 150px;
    resize: unset;
  }
`;
