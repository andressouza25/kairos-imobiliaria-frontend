import React from "react";
import { useAuth } from "../contexts/AuthContext"; // Acesso ao contexto
import { Button } from "./styles/FooterStyles";
import { useNavigate } from "react-router-dom"; // Importando o hook useNavigate

export default function LogoutButton() {
  const { setIsAuthenticated } = useAuth(); // Usando o setter do contexto
  const navigate = useNavigate(); // Usando o hook useNavigate para redirecionamento

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remover o token
    setIsAuthenticated(false); // Atualiza o estado no contexto para false
    navigate("/"); // Redireciona para a página inicial (Home)
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
