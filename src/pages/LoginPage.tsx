import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { loginUser } from "../services/authService";
import {
  Button,
  Input,
  FormContainer,
  FormTitle,
  ErrorMessage,
} from "../styles/LoginPageStyles";
import { Helmet } from "react-helmet-async";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await loginUser(email, password);
    if (result.success && result.token) {
      localStorage.setItem("token", result.token);
      setIsAuthenticated(true);
      navigate("/admin");
    } else {
      setError(result.message || "Erro ao realizar login");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Kairós Imobiliária</title>
        <meta
          name="description"
          content="Acesse o painel administrativo da Kairós Imobiliária com seu e-mail e senha."
        />
      </Helmet>

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
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Entrar</Button>
        </form>
      </FormContainer>
    </>
  );
}
