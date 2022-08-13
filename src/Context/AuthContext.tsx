import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";

import useAuth from "./hooks/useAuth";

interface AuthContextTypes {
  loading: boolean;
  authenticated: boolean;
  handleLogin: (payload: any) => void;
  handleRegister: (payload: any) => void;
  handleLogout: () => void;
}

const Context = createContext<AuthContextTypes>({} as AuthContextTypes);

function AuthProvider({ children }: PropsWithChildren) {
  // Recupera os estados de login (booleanos 'carregando' e 'estaAutenticado')
  // E eventos (logar, deslogar e registrar)
  const { authenticated, loading, handleLogin, handleLogout, handleRegister } = useAuth();

  // Passa children, estados e eventos recuperados para o componente interno
  // Este componente armazena o contexto da aplicação
  return (
    <Context.Provider
      value={{ loading, authenticated, handleLogin, handleLogout, handleRegister }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
