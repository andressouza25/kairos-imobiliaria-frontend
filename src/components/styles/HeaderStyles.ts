import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  margin: 0;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.text};
  position: relative;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  border: none;
`;

export const NavLinks = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    top: 75px;
    background-color: ${theme.colors.secondary};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    box-sizing: border-box; /* Garante que o padding não cause a barra fina */
    z-index: 1000;
  }
`;

export const NavItem = styled.li`
  font-size: 22px;
  padding: 10px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    /* Adiciona um pouco de espaçamento em telas menores */
    width: 100%;
  }
`;

// Links estilizados
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.text};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${theme.colors.text};
  font-size: 30px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none; /* Esconde o botão de menu em telas maiores */
  }
`;
