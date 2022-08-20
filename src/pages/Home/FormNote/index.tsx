import {
  ErrorMessage,
  Field,
  Formik,
  FormikErrors,
  FormikHelpers,
} from 'formik';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import { Note } from '../../../services/notes/types';
import { Form } from './styles';
import * as Yup from 'yup';

export interface FormValueState {
  id?: number;
  text: string;
  urgent: boolean;
}

interface FormNoteProps {
  handleSubmitNewNote: (
    payload: FormValueState,
    actions: FormikHelpers<FormValueState>
  ) => void;
  handleSubmitEditNote: (
    payload: FormValueState,
    actions: FormikHelpers<FormValueState>
  ) => void;
  noteToEdit?: Note;
}

function FormNote({
  handleSubmitNewNote,
  handleSubmitEditNote,
  noteToEdit,
}: FormNoteProps) {
  // Define os valores iniciais do formulário
  const initialValues: FormValueState = noteToEdit
    ? {
        id: noteToEdit.id,
        text: noteToEdit.text,
        urgent: Boolean(noteToEdit.urgent),
      }
    : {
        text: '',
        urgent: false,
      };

  const handleSubmit = noteToEdit
    ? handleSubmitEditNote
    : handleSubmitNewNote;

  // Renderiza Formik, passando valores iniciais e função de submit por argumento.
  // O Yup é responsável pela validação dos campos do formulário.
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        text: Yup.string()
          .min(5, 'Deve ter pelo menos 5 caracteres')
          .required('Campo obrigatório'),
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
            className="note-text"
          />
          <ErrorMessage name="text" />
          <Checkbox name="urgent" label="Urgente?" value = {noteToEdit?.urgent}/>
          <Button handleClick={() => {}} disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Salvando...' : 'Salvar'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormNote;
