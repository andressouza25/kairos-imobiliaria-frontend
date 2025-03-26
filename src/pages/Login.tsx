import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Acesso ao contexto de autenticação
import { loginUser } from "../services/authService"; // Serviço que faz o login (ajuste conforme sua API)
import {
  Button,
  Input,
  FormContainer,
  FormTitle,
  ErrorMessage,
} from "../styles/LoginPageStyles"; // Estilos

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { setIsAuthenticated } = useAuth(); // Usando o setter para mudar o estado de autenticação
  const navigate = useNavigate(); // Usando o hook useNavigate para redirecionar após o login

  // Verifica se o usuário já está autenticado
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin"); // Se estiver logado, redireciona para o painel administrativo
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Chama o serviço de login
    const result = await loginUser(email, password); // Função que chama a API de login
    if (result.success && result.token) {
      // Se o login for bem-sucedido, guarda o token no localStorage
      localStorage.setItem("token", result.token);

      // Atualiza o estado de autenticação
      setIsAuthenticated(true);

      // Redireciona para a página desejada (ex: painel administrativo)
      navigate("/admin");
    } else {
      setError(result.message || "Erro ao realizar login");
    }
  };

  return (
    <FormContainer>
      <FormTitle>LOGIN</FormTitle>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">E-mail</label>
          <Input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}{" "}
        {/* Exibe o erro, caso exista */}
        <Button type="submit">Entrar</Button>
      </form>
    </FormContainer>
  );
}
