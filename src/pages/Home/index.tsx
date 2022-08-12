import { useEffect, useState } from "react";
import CardNote from "../../components/CardNote";
import FabButton from "../../components/FabButton";
import FormNote from "./FormNote";
import Modal from "../../components/Modal";
import { NotesService } from "../../services/notes/note-service";
import { Note } from "../../services/notes/types";
import { Container } from "./styles";

function Home() {
  const [notes, setNotes] = useState<Note[]>([] as Note[]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await NotesService.getNotes();

      setNotes(response.data);
    })();
  }, []);

  return (
    <>
      {showModal && (
        <Modal title="Nova nota" handleClose={() => setShowModal(false)} style={{width: "100px"}}>
          <FormNote handleSubmit={() => {}} />
        </Modal>
      )}
      <Container>
        {notes.map((note) => (
          <CardNote note={note}></CardNote>
        ))}
        <FabButton handleClick={() => setShowModal(true)}>+</FabButton>
      </Container>
    </>
  );
}

export default Home;
