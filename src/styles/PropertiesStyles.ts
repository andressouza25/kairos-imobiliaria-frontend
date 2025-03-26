import styled from "styled-components";
import { theme } from "./theme";

export const PageTitle = styled.h1`
  text-align: center;
  margin: 40px 0 20px;
  font-size: 2rem;
  color: ${theme.colors.secondary};
`;

export const PropertyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 20px;
`;

export const PropertyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; // 🔥 Garante que o botão fique na parte inferior
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 350px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    max-height: 200px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95rem;
    margin: 4px 0;
  }

  p::first-letter {
    text-transform: uppercase;
  }

  em {
    margin: 4px 0;
    font-size: 15px;
    font-style: normal;
  }
`;

export const DetailsButton = styled.button`
  margin-top: auto; // Garante que fique no final do card
  margin-bottom: 0px; // Espaço entre o botão e o fim do card
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;
