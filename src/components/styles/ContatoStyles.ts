import styled from "styled-components";
import { theme } from "../../styles/theme";

/* Container principal da página */
export const ContactContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: ${theme.colors.background};
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

/* Informações de contato */
export const ContactInfo = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
`;

/* Estilizando o formulário */
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* Estilizando inputs */
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${theme.colors.darkGray};
  border-radius: 5px;
  font-size: 16px;
`;

/* Estilizando a área de texto */
export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${theme.colors.darkGray};
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  height: 100px;
`;

/* Estilizando o botão de envio */
export const SubmitButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${theme.colors.darkGray};
    color: ${theme.colors.text};
  }
`;

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #25d366; /* Cor oficial do WhatsApp */
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  margin-top: 20px;
  width: fit-content;
  margin: auto;

  &:hover {
    background: #1ebe57;
  }

  svg {
    font-size: 20px;
  }
`;
