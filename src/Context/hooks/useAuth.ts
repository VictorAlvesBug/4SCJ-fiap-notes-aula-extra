import axios, { AxiosError, AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthService } from "../../services/auth/auth-service";
import { AuthPayload } from "../../services/auth/types";

interface ErrorResponse extends AxiosError {
  response: AxiosResponse<{ erro: string }>;
}

export default function useAuth() {
  // Inicializa states authenticated e loading
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Recupera token do localStorage e, caso o token exista, define que o usuário
  // está autenticado.
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  // Função de logar:
  // Inicia carregamento, efetua requisição de logar, marca como autenticado
  // e finaliza carregamento
  async function handleLogin(payload: AuthPayload) {
    try {
      setLoading(true);
      const {
        data: { token },
      } = await AuthService.login(payload);

      localStorage.setItem("token", token);
      setAuthenticated(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as ErrorResponse;
        alert(err.response?.data.erro);
      } else {
        alert("Erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  }

  // Função de registrar:
  // Inicia carregamento, efetua requisição de registrar, marca como autenticado
  // e finaliza carregamento
  async function handleRegister(payload: AuthPayload) {
    try {
      setLoading(true);
      const {
        data: { token },
      } = await AuthService.register(payload);

      localStorage.setItem("token", token);
      setAuthenticated(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as ErrorResponse;
        alert(err.response?.data.erro);
      } else {
        alert("Erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  }

  // Função de deslogar:
  // marca como não autenticado e remove o token do localStorage
  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
  }

  // retorna um objeto com os status de loading, autenticação e as funções de login
  return { authenticated, loading, handleLogin, handleLogout, handleRegister };
}
