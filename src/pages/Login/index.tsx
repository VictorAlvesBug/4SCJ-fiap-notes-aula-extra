import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import FormLogin, { FormValueState } from "./FormLogin";
import { Container } from "./styles";

function Login() {
  // Recupera a função de logar e o status de autenticação do contexto 
  // previamente salvo no arquivo: 'AuthContext.tsx' 
  const { handleLogin, authenticated } = useContext(Context);
  const navigate = useNavigate();

  // Caso já esteja autenticado, redireciona para a rota de principal '/home'. 
  // A função deste useEffect roda na primeira renderização do Login e 
  // sempre que a variável 'authenticated' mudar de valor;
  useEffect(() => {
    if(authenticated) navigate("/home");
  }, [authenticated]);

  // Renderiza o form de Login, passando a função de logar para usar no submit
  return (
    <>
      <Container>
        <FormLogin handleSubmit={handleLogin} />
      </Container>
    </>
  );
}

export default Login;
