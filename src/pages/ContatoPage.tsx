import { useState } from "react";
import { ContatoContainer, Formulario, Botao } from "../styles/ContatoStyles";
import ExitIntentModal from "../components/ExitIntentModal"; // ⬅️ Importa o modal

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
    } else {
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <ContatoContainer>
      <ExitIntentModal />
      <h1>Surgiu alguma dúvida?</h1>
      <p>Preencha o formulário abaixo e entraremos em contato com você.</p>
      <Formulario onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Mensagem</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <Botao type="submit">Enviar</Botao>
      </Formulario>
    </ContatoContainer>
  );
}
