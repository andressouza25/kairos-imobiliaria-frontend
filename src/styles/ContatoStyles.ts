import styled from "styled-components";
import { theme } from "./theme";

export const ContatoContainer = styled.div`
  max-width: 600px;
  margin: 60px auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    text-align: center;
    margin-bottom: 30px;
    color: ${theme.colors.darkGray};
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input<{ isError?: boolean }>`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ isError }) => (isError ? "#e74c3c" : "#ccc")};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const StyledTextarea = styled.textarea<{ isError?: boolean }>`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ isError }) => (isError ? "#e74c3c" : "#ccc")};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const Botao = styled.button`
  background: ${theme.colors.primary};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${theme.colors.darkPrimary};
  }
`;

export const ErrorText = styled.span`
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 4px;
`;

export const MensagemSucesso = styled.div`
  background-color: ${theme.colors.primary || "#d4edda"};
  color: ${theme.colors.text || "#155724"};
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 20px;
  border: 1px solid ${theme.colors.primary || "#c3e6cb"};
  text-align: center;
`;
