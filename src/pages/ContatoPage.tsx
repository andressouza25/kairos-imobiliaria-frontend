import { useState } from "react";
import {
  ContatoContainer,
  Formulario,
  Botao,
  InputGroup,
  ErrorText,
  StyledInput,
  StyledTextarea,
} from "../styles/ContatoStyles";
import { Helmet } from "react-helmet-async"; // SEO

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botField, setBotField] = useState(""); // Honeypot

  const isValid = {
    name: name.trim().length >= 3,
    email: /\S+@\S+\.\S+/.test(email),
    message: message.trim().length >= 10,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (botField) {
      console.warn("Spam detectado - campo oculto preenchido.");
      return;
    }

    if (!isValid.name || !isValid.email || !isValid.message) return;

    setIsSubmitting(true);

    const response = await fetch("http://localhost:5000/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, botField }),
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(false);
    } else {
      alert("Erro ao enviar mensagem.");
    }

    setIsSubmitting(false);
  };

  return (
    <ContatoContainer>
      <Helmet>
        <title>Entre em Contato | Kairós Imobiliária</title>
        <meta
          name="description"
          content="Tem dúvidas? Fale com a equipe da Kairós Imobiliária preenchendo o formulário de contato."
        />
      </Helmet>

      <h1>Surgiu alguma dúvida?</h1>
      <p>Preencha o formulário abaixo e entraremos em contato com você.</p>

      <Formulario onSubmit={handleSubmit}>
        {/* Honeypot escondido */}
        <input
          type="text"
          name="botField"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
          style={{ display: "none" }}
          autoComplete="off"
        />

        <InputGroup>
          <label>
            <strong>Nome</strong>
          </label>
          <StyledInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isError={submitted && !isValid.name}
          />
          {submitted && !isValid.name && (
            <ErrorText>Nome precisa ter ao menos 3 letras.</ErrorText>
          )}
        </InputGroup>

        <InputGroup>
          <label>
            <strong>Email</strong>
          </label>
          <StyledInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isError={submitted && !isValid.email}
          />
          {submitted && !isValid.email && (
            <ErrorText>Informe um e-mail válido.</ErrorText>
          )}
        </InputGroup>

        <InputGroup>
          <label>
            <strong>Mensagem</strong>
          </label>
          <StyledTextarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            isError={submitted && !isValid.message}
          />
          {submitted && !isValid.message && (
            <ErrorText>A mensagem deve ter no mínimo 10 caracteres.</ErrorText>
          )}
        </InputGroup>

        <Botao type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Botao>
      </Formulario>
    </ContatoContainer>
  );
}
