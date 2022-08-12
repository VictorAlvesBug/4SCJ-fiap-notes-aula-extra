import { ErrorMessage, Field, Formik } from "formik";
import { Link } from "react-router-dom";
import { Form } from "./styles";
import Button from "../../../components/Button";
import { registerValidation } from "./validations";

interface FormValueState {
  username: string;
  password: string;
}

interface FormRegisterProps {
  handleSubmit: (payload: FormValueState) => void;
}

function FormRegister({ handleSubmit }: FormRegisterProps) {
  const initialValues: FormValueState = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerValidation}
      onSubmit={handleSubmit}
    >
      <Form>
        <h1>Cadastre-se</h1>
        <Field name="username" autoFocus placeholder="Insira seu usuário" />
        <ErrorMessage
          component="span"
          className="input-error"
          name="username"
        />
        <Field type="password" name="password" placeholder="Insira sua senha" />
        <ErrorMessage
          component="span"
          className="input-error"
          name="password"
        />
        <Button handleClick={() => {}}>Salvar</Button>
        <Link to="/">Voltar</Link>
      </Form>
    </Formik>
  );
}

export default FormRegister;
