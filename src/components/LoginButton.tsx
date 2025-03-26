import React from "react";
import { Button } from "./styles/FooterStyles";
import { useNavigate } from "react-router-dom"; // Importando o hook useNavigate

export default function LoginButton() {
  const navigate = useNavigate(); // Inicializando o hook useNavigate

  const handleLogin = () => {
    // Redireciona para a página de login
    navigate("/login"); // Isso vai levar o usuário para a página "/login"
  };

  return <Button onClick={handleLogin}>Plataforma Administrativa</Button>;
}
