// styles/ImoveisFiltradosStyles.ts
import styled from "styled-components";
import { theme } from "./theme";

// Container para a página
export const PageContainer = styled.div`
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

// Título da página
export const Title = styled.h1`
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;
`;

// Grid para os imóveis
export const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
  justify-content: space-between;
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
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: default;

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.darkGray};
    color: white;
    padding: 4px 8px;
    border-radius: 6px;
    white-space: nowrap;
    font-size: 12px;
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
    visibility: hidden;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;

export const PriceRow = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid ${theme.colors.border};
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

export const DestaqueBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${theme.colors.primary};
  color: white;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  z-index: 1;
`;
