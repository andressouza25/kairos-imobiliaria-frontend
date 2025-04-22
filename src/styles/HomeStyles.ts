import styled from "styled-components";
import { theme } from "./theme";
import backgroundImage from "../assets/fundoPrincipal2.jpg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const FeaturedSection = styled.section`
  width: 100%;
  padding: 50px 0;
  padding: 2rem;
  background: ${theme.colors.background};
  border-radius: 10px;
  margin-top: 2rem;
  text-align: center;

  display: flex;
  flex-direction: column; /* Para o título e imagens estarem empilhados */
  justify-content: center;
  align-items: center;
  gap: 20px; /* Espaçamento entre os itens */
`;

export const FeaturedTitle = styled.h2`
  text-align: center; /* Centraliza o título */
  font-size: 24px;
  color: ${theme.colors.secondary};
  margin-bottom: 1rem;
`;

export const FeaturedPropertiesGrid = styled.div`
  display: flex; /* Usando flexbox para alinhar os cards horizontalmente */
  flex-wrap: wrap; /* Permite que os cards que não cabem na linha desçam para a linha seguinte */
  justify-content: space-evenly; /* Distribui os cards igualmente ao longo da linha */
  gap: 20px; /* Espaçamento entre os cards */
  margin-top: 20px;
  width: 100%; /* Garante que os cards ocupem toda a largura disponível */
`;

export const SeeMoreButton = styled.button`
  margin-top: 20px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;
