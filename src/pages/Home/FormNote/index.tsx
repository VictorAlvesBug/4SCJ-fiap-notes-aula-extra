import {
  ErrorMessage,
  Field,
  Formik,
  FormikErrors,
  FormikHelpers,
} from "formik";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { Form } from "./styles";
import * as Yup from "yup";

export interface FormValueState {
  text: string;
  urgent: boolean;
}

interface FormNoteProps {
  handleSubmit: (
    payload: FormValueState,
    actions: FormikHelpers<FormValueState>
  ) => void;
}

function FormNote({ handleSubmit }: FormNoteProps) {
  const initialValues: FormValueState = {
    text: "",
    urgent: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        text: Yup.string()
          .min(5, "Deve ter pelo menos 5 caracteres")
          .required("Campo obrigatório"),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            as="textarea"
            name="text"
            autoFocus
            placeholder="Insira o texto da nota"
          />
          <ErrorMessage name="text" />
          <Checkbox name="urgent" label="Urgente?" />
          <Button handleClick={() => {}} disabled={isSubmitting}>
            {isSubmitting ? "Salvando..." : "Salvar"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormNote;
