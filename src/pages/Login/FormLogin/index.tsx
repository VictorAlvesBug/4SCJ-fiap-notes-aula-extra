import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { Form } from "./styles";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";

export interface FormValueState {
  username: string;
  password: string;
}

interface FormLoginProps {
  handleSubmit: (payload: FormValueState) => void;
}

function FormLogin({ handleSubmit }: FormLoginProps) {
  // Define os valores iniciais dos campos de usuário e senha como vazios
  const initialValues: FormValueState = {
    username: "",
    password: "",
  };

  // Renderiza Formik, passando valores iniciais e função de logar por argumento.
  // O Yup é responsável pela validação dos campos do formulário.
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(5, "Deve ter pelo menos 5 caracteres")
          .required("Campo obrigatório"),
        password: Yup.string()
          .required("Campo obrigatório")
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <h1>Login</h1>
        <Field name="username" autoFocus placeholder="Insira seu usuário" />
        <ErrorMessage component="span" className="input-error" name="username" />
        <Field type="password" name="password" placeholder="Insira sua senha" />
        <ErrorMessage component="span" className="input-error" name="password" />
        <Button>Entrar</Button>
        <Link to="/register">Register</Link>
      </Form>
    </Formik>
  );
}

export default FormLogin;
