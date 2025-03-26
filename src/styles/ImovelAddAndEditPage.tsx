import styled from "styled-components";
import { theme } from "./theme";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: ${theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

export const FormSection = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1rem;
  background-color: ${theme.colors.background};
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${theme.colors.text};
  color: ${theme.colors.secondary};

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 5px rgba(243, 152, 32, 0.3);
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  font-weight: bold;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;
