import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import { NotesService } from "../../services/notes/note-service";
import { Note } from "../../services/notes/types";
import FormRegister from "./FormRegister";
import { Container } from "./styles";

function Register() {
  // Recupera a função de registrar e o status de autenticação do contexto 
  // previamente salvo no arquivo: 'AuthContext.tsx' 
  const { handleRegister, authenticated } = useContext(Context);
  const navigate = useNavigate();

  // Caso já esteja autenticado, redireciona para a rota de principal '/home'. 
  // A função deste useEffect roda na primeira renderização do Register e 
  // sempre que a variável 'authenticated' mudar de valor;
  useEffect(() => {
    if(authenticated) navigate("/home");
  }, [authenticated])

  // Renderiza o form de Login, passando a função de registrar para usar no submit
  return (
    <>
      <Container>
        <FormRegister
          handleSubmit={handleRegister}
        />
      </Container>
    </>
  );
}

export default Register;
