import { theme } from "./theme";
import styled from "styled-components";

export const ContatoContainer = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: center;
  padding: 60px;
`;

export const Formulario = styled.form`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  gap: 10px;

  label {
    font-weight: bold;
    margin-top: 10px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    height: 120px;
    resize: none;
  }
`;

export const Botao = styled.button`
  background-color: ${theme.colors.primary};
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.3s;
  font-weight: bold;
  color: ${theme.colors.text};

  &:hover {
    color: ${theme.colors.darkGray};
  }
`;
