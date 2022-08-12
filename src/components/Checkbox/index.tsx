import { Field } from "formik";
import { useId } from "react";
import { Container } from "./styles";

interface CheckboxProps {
  name: string;
  label: string;
  checked?: boolean;
}

function Checkbox({ name, label, checked }: CheckboxProps) {
  const id = useId();

  return (
    <Container>
      <Field id={id} name={name} type="checkbox" checked={checked} />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
}

export default Checkbox;
