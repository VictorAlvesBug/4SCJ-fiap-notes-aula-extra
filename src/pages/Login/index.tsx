import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import FormLogin, { FormValueState } from "./FormLogin";
import { Container } from "./styles";

function Login() {
  const { handleLogin, authenticated } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if(authenticated) navigate("/home");
  }, [authenticated]);

  return (
    <>
      <Container>
        <FormLogin handleSubmit={handleLogin} />
      </Container>
    </>
  );
}

export default Login;
