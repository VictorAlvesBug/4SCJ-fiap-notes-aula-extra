import {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import {
  BrowserRouter,
  PathRouteProps,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Context } from "./Context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

interface PrivateRouteProps {
  authenticated: boolean;
}

function PrivateRoute({ authenticated }: PrivateRouteProps) {
  if (!authenticated) return <Navigate to="/" replace />;

  return <Outlet />;
}

function AppRoutes() {
  // Recupera o status de autenticação do contexto previamente salvo no arquivo: 
  // 'AuthContext.tsx' 
  const { authenticated } = useContext(Context);

  // Inclui as rotas:
  // - Login "/"
  // - Register "register" 
  // - Rota Principal "home" (só é renderizada se o usuário estiver autenticado)

  // Cada uma das rotas possui o element que será renderizado ao acessá-la.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute authenticated={authenticated} />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
