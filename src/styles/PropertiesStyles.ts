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
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 350px;
  min-height: 600px;
  max-height: 600px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;

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
    flex-shrink: 0;
  }

  p {
    font-size: 0.95rem;
    margin: 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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

export const DestaqueBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${theme.colors.primary};
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: bold;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;
