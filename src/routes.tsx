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
  const { authenticated } = useContext(Context);

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
