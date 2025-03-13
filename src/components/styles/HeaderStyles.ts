import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa o Link do React Router para navegação sem recarregar a página
import { theme } from "../../styles/theme";

export const Navbar = styled.nav`
  display: flex; /* Usa flexbox para organizar os itens */
  justify-content: space-between; /* Espaço igual entre logo e menu */
  align-items: center; /* Centraliza os itens verticalmente */
  padding: 16px 32px; /* Adiciona espaçamento interno (16px topo e baixo, 32px laterais) */
  background-color: ${theme.colors
    .secondary}; /* Define a cor de fundo do menu */
  color: ${theme.colors.text};
`;

export const Logo = styled.h1`
  font-size: 24px; /* Define o tamanho da fonte como 24px */
  color: ${theme.colors.primary};
`;

export const NavLinks = styled.ul`
  display: flex; /* Organiza os links em linha */
  list-style: none; /* Remove os marcadores de lista padrão */
  gap: 16px; /* Adiciona um espaçamento de 16px entre os links */
`;

export const NavItem = styled.li`
  font-size: 18px; /* Define o tamanho da fonte dos itens do menu */
`;

export const StyledLink = styled(Link)`
  text-decoration: none; /* Remove o sublinhado padrão dos links */
  color: ${theme.colors.text}; /* Define a cor do link como branco */

  &:hover {
    /* Quando o usuário passar o mouse sobre o link */
    color: ${theme.colors.primary}; /* Muda a cor do link para a cor primária */
  }
`;
