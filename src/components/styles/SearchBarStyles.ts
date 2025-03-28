import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(247, 248, 255);
  padding: 20px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: max-content;
  min-width: 70%;
  max-width: 1400px;
  margin: auto;
`;

export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

export const FilterColumn = styled.div<{ small?: boolean; wide?: boolean }>`
  flex: ${({ small }) => (small ? "1" : "1.5")};
  min-width: ${({ small, wide }) =>
    wide ? "280px" : small ? "130px" : "180px"};
  max-width: ${({ small, wide }) =>
    wide ? "350px" : small ? "140px" : "220px"};
  width: ${({ wide }) => (wide ? "100%" : "auto")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  padding: 16px 16px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.darkGray};
  transition: all 0.3s ease;
  height: 50px;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  & option[value=""][disabled] {
    display: none;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  &::after {
    content: "⮟";
    position: absolute;
    top: 50%;
    right: 15px;
    bottom: 14px;
    transform: translateY(-50%);
    font-size: 15px;
    color: ${({ theme }) => theme.colors.darkGray};
    pointer-events: none;
  }
`;

export const Label = styled.label<{ isActive: boolean }>`
  position: absolute;
  left: 12px;
  font-size: ${({ isActive }) =>
    isActive ? "10px" : "14px"}; /*  Diminui o tamanho quando ativado */
  top: ${({ isActive }) =>
    isActive ? "4px" : "50%"}; /*  Move para o topo ao clicar */
  transform: ${({ isActive }) =>
    isActive
      ? "none"
      : "translateY(-50%)"}; /*  Mantém centralizado inicialmente */
  color: ${({ theme }) => theme.colors.lightText};
  transition: 0.3s ease all;
  pointer-events: none;
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.background : "transparent"};
  padding: ${({ isActive }) => (isActive ? "0 5px" : "0")};
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.background};
  color: ${theme.colors.darkGray};
  transition: all 0.3s ease;
  height: 50px;
  display: flex;
  align-items: center;
  line-height: normal;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 5px rgba(243, 152, 32, 0.3);
  }
`;

export const SearchButton = styled.button`
  flex: 1;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  font-weight: bold;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 16px;
  border-radius: 10px;
  padding: 16px 20px;
  height: 50px;
  margin-left: 10px;

  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;

export const SearchButtonContainer = styled.div`
  flex: 0.5;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -20px;
`;

export const ToggleFiltersButton = styled.button`
  background: ${theme.colors.background};
  color: ${theme.colors.darkGray};
  font-size: 12px;
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 95px;
  margin-right: 15px;
  margin-left: 15px;

  &:hover {
    background: ${theme.colors.background};
    color: ${theme.colors.darkGray};
  }
`;

export const ExtraFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  margin-top: 10px;
`;

export const FilterExtraColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 180px;
  max-width: 250px;
`;

export const LocationInputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o input */
  margin-top: 10px; /* Espaçamento superior */
`;

// Input de localização com estilos ajustados
export const LocationInputStyled = styled.input`
  width: 100%; /* Faz o input ocupar 100% da largura disponível */
  max-width: 350px; /* Limita a largura máxima para não ficar muito largo */
  padding: 12px 15px; /* Ajuste do padding para maior conforto */
  font-size: 14px;
  border: 1px solid ${theme.colors.border}; /* Borda suave */
  border-radius: 10px; /* Bordas arredondadas */
  background: ${theme.colors.background};
  color: ${theme.colors.darkGray};
  transition: all 0.3s ease;
  height: 50px; /* Altura do campo de texto */

  &:focus {
    border-color: ${theme.colors.primary}; /* Borda colorida ao focar */
    outline: none;
    box-shadow: 0 0 5px rgba(243, 152, 32, 0.3); /* Efeito de sombra */
  }

  &::placeholder {
    color: ${theme.colors.lightText}; /* Cor do placeholder */
  }
`;
