import { useCallback, useContext, useEffect, useState } from 'react';
import CardNote from '../../components/CardNote';
import FabButton from '../../components/FabButton';
import FormNote, { FormValueState } from './FormNote';
import Modal from '../../components/Modal';
import { NotesService } from '../../services/notes/note-service';
import { Note } from '../../services/notes/types';
import { Container } from './styles';
import { Context } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { FormikHelpers } from 'formik';

function Home() {
  // Recupera função de deslogar e status de autenticação do contexto
  // previamente salvo no arquivo: 'AuthContext.tsx'
  const { handleLogout, authenticated } = useContext(Context);
  // Inicializa hook useState para notes, showModal e loading
  const [noteToEdit, setNoteToEdit] = useState<Note>();
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [notes, setNotes] = useState<Note[]>([] as Note[]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Na primeira renderização, de forma assíncrona, recupera as notas da api,
  // armazena no state notes e desabilita o carregamento da página
  useEffect(() => {
    (async () => {
      const response = await NotesService.getNotes();

      setNotes(response.data);
      setLoading(false);
    })();
  }, []);

  // Função de callback para cadastrar uma nota na api e adicioná-la no state
  // notes. Desabilita submitting do form e fecha o modal.
  const createNote = useCallback(
    (values: FormValueState, actions: FormikHelpers<FormValueState>) => {
      (async () => {
        const response = await NotesService.postNote(values);
        setNotes((prevState) => [...prevState, response.data]);

        actions.setSubmitting(false);
        setShowModal(false);
      })();
    },
    [notes]
  );

  // Função de callback para editar uma nota na api e alterá-la no state
  // notes. Desabilita submitting do form e fecha o modal.
  const editNote = useCallback(
    (values: FormValueState, actions: FormikHelpers<FormValueState>) => {
      (async () => {
        const response = await NotesService.putNote(values);
        setNotes((prevState) =>
          prevState.map((note) => {
            if (note.id === values.id) {
              return {
                ...note,
                text: values.text,
                urgent: values.urgent,
              };
            }
            return note;
          })
        );

        actions.setSubmitting(false);
        setShowModal(false);
      })();
    },
    [notes]
  );

  // Função de callback para abrir modal no modo de edição para determinada notas
  const openModalWithNoteToEdit = useCallback((note: Note) => {
    setNoteToEdit(note);
    setIsEditingNote(true);
    setShowModal(true);
  }, []);

  // Função de callback para deletar uma nota da api e removê-la do state notes.
  const deleteNote = useCallback((id: number, text: string) => {
    (async () => {
      if (confirm(`Deseja remover a nota "${text}" permanentemente?`)) {
        await NotesService.deleteNote({ id });
        setNotes((prevState) => prevState.filter((note) => note.id !== id));
      }
    })();
  }, []);

  // Na primeira renderização e sempre que a variável 'authenticated' mudar de
  // valor, verifica se está autenticado e caso não esteja redireciona para o
  // Login.
  useEffect(() => {
    if (!authenticated) navigate('/');
  }, [authenticated]);

  // Caso esteja carregando, exibe animação de Spinner do Loading
  // Caso o modal esteja aberto, exibe o modal passando a função de fechar modal
  // para usar no evento de close e a função de cadastrar uma nota no submit.
  // Exibe sempre:
  // - Lista de notas de acordo com o state notes.
  // - Botão flutuante de adicionar uma nota, que abre o modal de cadastro.
  // - Botão flutuante de deslogar.

  return (
    <>
      {loading && <Loading />}
      {showModal && (
        <Modal
          titleNewNote="Nova nota"
          titleEditNote="Editando nota"
          handleClose={() => setShowModal(false)}
          isEditingNote={isEditingNote}
          style={{ width: '100px' }}
        >
          <FormNote
            handleSubmitNewNote={createNote}
            handleSubmitEditNote={editNote}
            noteToEdit={noteToEdit}
          />
        </Modal>
      )}
      <Container>
        {notes.map((note) => (
          <CardNote
            key={note.id}
            handleEdit={openModalWithNoteToEdit}
            handleDelete={deleteNote}
            note={note}
          ></CardNote>
        ))}
        <FabButton
          position="left"
          handleClick={() => {
            setShowModal(true);
            setNoteToEdit(undefined);
            setIsEditingNote(false);
          }}
        >
          +
        </FabButton>
        <FabButton position="right" handleClick={handleLogout}>
          <span className="material-icons">logout</span>
        </FabButton>
      </Container>
    </>
  );
}

export default Home;
