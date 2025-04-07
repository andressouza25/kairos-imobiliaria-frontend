import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/HomePage";
import Imoveis from "./pages/ImoveisPage";
import Contato from "./pages/ContatoPage";
import Sobre from "./pages/SobrePage";
import AdminPanel from "./pages/AdminPanel";
import AddProperty from "./pages/ImovelAddPage";
import Login from "./pages/LoginPage";
import ImovelEdit from "./pages/ImovelEditPage";
import { useAuth } from "./contexts/AuthContext"; // Para obter o estado de autenticação
import ImovelDetalhesPage from "./pages/ImovelDetalhadoPage";

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
      <Route path="/imoveis/:id" element={<ImovelDetalhesPage />} />

      {/* Rota de login - Redireciona para /admin se já estiver logado */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/admin" /> : <Login />}
      />
    </Routes>
  );
}
