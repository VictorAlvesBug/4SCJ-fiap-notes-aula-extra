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

  .note-text{
    background-color: #ef6894;
    margin-top: 5px;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;
