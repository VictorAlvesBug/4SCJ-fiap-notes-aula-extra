import { Note } from "../../services/notes/types";
import { formatDate } from "../../services/utils";
import { Container } from "./styles";

interface NoteProps {
  note: Note;
  handleEdit: (note: Note) => void;
  handleDelete: (id: number, text: string) => void;
}

function CardNote({ note, handleEdit, handleDelete }: NoteProps) {
  return (
    <>
      <Container>
        <p>{`Nota #${note.id} - ${formatDate(new Date(note?.date))}`}</p>
        <p className="note-text">{note.text}</p>
        {note.urgent && (
          <span className="material-icons priority-note" id="priority">
            priority_high
          </span>
        )}
        <div className="actions-container">
        <span className="material-icons edit-note" onClick={() => handleEdit(note)}>
          {" "}
          edit{" "}
        </span>
        <span className="material-icons delete-note" onClick={() => handleDelete(note.id, note.text)}>
          {" "}
          delete_forever{" "}
        </span>
        </div>
      </Container>
    </>
  );
}

export default CardNote;
