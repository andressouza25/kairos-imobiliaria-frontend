import styled from "styled-components";
import { theme } from "../../styles/theme";

// Container principal da SearchBar
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

  /* Responsividade para dispositivos móveis */
  @media (max-width: 768px) {
    width: 100%;
    padding: 8px;
  }
`;

// Filtro principal (Pretensão e Tipo)
export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  /* Para mobile, os filtros vão empilhar e ocupar a largura total */
  @media (max-width: 768px) {
    flex-direction: column; /* Coloca os filtros um embaixo do outro */
    gap: 16px;
  }
`;

// Filtro individual (Cada coluna)
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

  /* Ajuste para dispositivos móveis */
  @media (max-width: 768px) {
    min-width: 100%; /* Faz com que os filtros ocupem toda a largura */
    max-width: 100%;
    flex: 1;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  padding: 16px 16px;
  font-size: 14px;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.text};
  color: ${theme.colors.darkGray};
  transition: all 0.3s ease;
  height: 50px;
  appearance: none;

  &:focus {
    border-color: ${theme.colors.primary};
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
    top: 45%;
    right: 15px;
    bottom: 14px;
    transform: translateY(-50%);
    font-size: 15px;
    color: ${theme.colors.darkGray};
    pointer-events: none;
  }
`;

// Filtros adicionais
export const ExtraFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: ${theme.colors.background};
  border-radius: 10px;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const FilterExtraColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 180px;
  max-width: 250px;
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

  @media (max-width: 768px) {
    width: 100%; /* Ajusta a largura para ocupar 100% no mobile */
  }
`;

export const SearchButtonContainer = styled.div`
  flex: 0.5;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -20px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Label = styled.label<{ isActive: boolean }>`
  position: absolute;
  left: 12px;
  font-size: ${({ isActive }) =>
    isActive ? "10px" : "14px"}; /* Diminui o tamanho quando ativado */
  top: ${({ isActive }) =>
    isActive ? "4px" : "50%"}; /* Move para o topo ao clicar */
  transform: ${({ isActive }) => (isActive ? "none" : "translateY(-50%)")};
  color: ${theme.colors.lightText};
  transition: 0.3s ease all;
  pointer-events: none;
  background: ${({ isActive }) => (isActive ? "#FFFFFF" : "transparent")};
  padding: ${({ isActive }) => (isActive ? "0 5px" : "0")};
`;
