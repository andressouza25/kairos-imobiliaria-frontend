import styled from "styled-components";
import { theme } from "./theme";

export const AdminContainer = styled.div`
  padding: 40px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  text-transform: capitalize;
`;

export const AddButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

export const EditButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 120px;

  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;

export const DeleteButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 120px;

  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;
