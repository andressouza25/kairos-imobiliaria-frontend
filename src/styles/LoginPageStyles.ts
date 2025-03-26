import styled from "styled-components";
import { theme } from "./theme"; // Importando o tema

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 400px;
  margin: 100px auto;
  background-color: ${theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  margin: 10px 0;
  border: 1px solid ${theme.colors.border};
  border-radius: 5px;
  background-color: ${theme.colors.background};
  color: ${theme.colors.secondary};

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;
