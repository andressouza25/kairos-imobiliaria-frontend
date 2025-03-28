import styled from "styled-components";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";

export const AdminContainer = styled.div`
  padding: 2rem;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${theme.colors.secondary}; /* Usando a cor do tema para o texto */
`;

export const AddButton = styled.button`
  text-align: center;
  font-weight: 700;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  border: none;

  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;

export const PropertyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

export const PropertyCard = styled.div`
  width: 300px;
  background-color: ${theme.colors
    .background}; /* Cor do background conforme tema */
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: ${theme.colors.text}; /* Cor do texto conforme tema */
  }

  p {
    font-size: 14px;
    color: ${theme.colors.darkGray}; /* Cor do texto conforme tema */
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const DeleteButton = styled.button`
  background-color: ${theme.colors.primary}; /* Cor de alerta do tema */
  color: ${theme.colors.text};
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    background-color: ${theme.colors.darkPrimary}; /* Cor do hover */
  }
`;

export const EditButton = styled.button`
  background-color: ${theme.colors.primary}; /* Cor de sucesso do tema */
  color: ${theme.colors.text};
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    background-color: ${theme.colors.darkPrimary}; /* Cor do hover */
  }
`;

export const StyledLink = styled(Link)`
  color: ${theme.colors.secondary}; /* Cor do link conforme o tema */
  text-decoration: none; /* Remove o sublinhado */
  text-transform: uppercase;
  &:hover {
    color: ${theme.colors
      .darkPrimary}; /* Cor ao passar o mouse, usando o tema */
  }
`;

export const HighlightButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 10px;
  margin-top: 10px;
  width: 100%;
  transition: 0.3s;

  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;
