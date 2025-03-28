// styles/ImoveisFiltradosStyles.ts
import styled from "styled-components";
import { theme } from "./theme";

// Container para a página
export const PageContainer = styled.div`
  padding: 2rem;
`;

// Título da página
export const Title = styled.h1`
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center; // Adicionando centralização
`;

// Grid para os imóveis
export const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); // Ajustando o tamanho da grid
  gap: 24px;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
export const PropertyCard = styled.div`
  background-color: ${theme.colors.text};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const PropertyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PropertyInfo = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const PropertyTitle = styled.h3`
  margin: 0;
`;

export const PropertyDescription = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.darkGray};
  margin: 10px 0;
`;

export const PropertyLocation = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.darkGray};
  margin-bottom: 10px;
`;

export const PropertyTypeAndTransaction = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${theme.colors.darkGray};
  margin-bottom: 10px;
`;

export const IconsRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: ${theme.colors.darkGray};
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PriceRow = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PropertyTag = styled.span`
  display: inline-block;
  background: ${theme.colors.primary};
  color: ${theme.colors.text};
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
`;
