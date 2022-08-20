import { Field } from "formik";
import { useId } from "react";
import { Container } from "./styles";

interface CheckboxProps {
  name: string;
  label: string;
  value?: boolean;
}

function Checkbox({ name, label, value }: CheckboxProps) {
  const id = useId();
  
  return (
    <Container>
      <Field id={id} name={name} type="checkbox" />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
}

export default Checkbox;
