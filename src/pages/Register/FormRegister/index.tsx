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
  // Define os valores iniciais dos campos de usuário e senha como vazios
  const initialValues: FormValueState = {
    username: "",
    password: "",
  };

  // Renderiza Formik, passando valores iniciais e função de logar por argumento.
  // Diferentemente do Login, no Register a validação do form é criada em outro 
  // arquivo e importada para ser utilizada no Formik (também usando Yup)
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
