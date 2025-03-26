import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Imoveis from "./pages/Imoveis";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import AdminPanel from "./pages/AdminPanel";
import AddProperty from "./pages/ImovelAdd";
import Login from "./pages/Login";
import ImovelEdit from "./pages/ImovelEdit";
import { useAuth } from "./contexts/AuthContext"; // Para obter o estado de autenticação

export default function AppRoutes() {
  const { isAuthenticated } = useAuth(); // Usa o hook para obter o estado de autenticação

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/imoveis" element={<Imoveis />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />

      {/* Rota protegida */}
      <Route
        path="/admin"
        element={isAuthenticated ? <AdminPanel /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin/adicionar"
        element={isAuthenticated ? <AddProperty /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin/editar/:id"
        element={isAuthenticated ? <ImovelEdit /> : <Navigate to="/login" />}
      />

      {/* Rota de login - Redireciona para /admin se já estiver logado */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/admin" /> : <Login />}
      />
    </Routes>
  );
}
