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

export const TopControls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  padding: 10px 35px 10px 12px;
  font-size: 14px;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  background-color: ${theme.colors.text};
  color: ${theme.colors.darkGray};
  height: 40px;
  width: 300px;
  transition: all 0.3s ease;
  background-image: url("data:image/svg+xml,%3Csvg fill='gray' height='18' viewBox='0 0 24 24' width='18' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.19 5.01 12.17 2 8.5 2S1.81 5.01 1.81 8.39c0 3.38 3.02 6.39 6.69 6.39 1.61 0 3.09-.59 4.23-1.56l.27.28v.79l4.25 4.25c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L15.5 14zm-7 0C6.01 14 4 11.99 4 9.5S6.01 5 8.5 5 13 7.01 13 9.5 10.99 14 8.5 14z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;

  &::placeholder {
    color: ${theme.colors.lightText};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 5px rgba(243, 152, 32, 0.3);
  }
`;
