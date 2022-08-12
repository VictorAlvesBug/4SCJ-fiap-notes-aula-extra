import { useId } from "react";
import { Container } from "./styles";

interface CheckboxProps {
  label: string;
  handleChange: () => void;
  checked: boolean;
}

function Checkbox({ label, handleChange, checked = false }: CheckboxProps) {
  const id = useId();

  return (
    <Container>
      <input
        id={id}
        checked={checked}
        onChange={handleChange}
        type="checkbox"
      ></input>
      <label htmlFor={id}>{label}</label>
    </Container>
  );
}

export default Checkbox;
