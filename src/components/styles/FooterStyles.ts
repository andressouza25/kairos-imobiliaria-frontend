import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.text};
  padding: 20px 0;
  width: 100%;
  position: relative;
  bottom: 0;
  box-sizing: border-box; /* Para garantir que a largura não seja afetada pelo padding */
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap; /* Adiciona wrap para os itens em telas pequenas */

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center; /* Centraliza os itens */
    gap: 10px; /* Ajuste o espaçamento entre os itens */
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 10px;
  font-size: 12px;
  font-weight: bold;

  /* Ajuste para os ícones e textos ficarem mais ajustados em telas pequenas */
  p {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 10px;
  }
`;

export const FooterText = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const Icon = styled.span`
  color: ${theme.colors.primary};
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 14px;
  background: none;
  border: none;
  color: ${theme.colors.text};
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: bold;

  &:hover {
    color: ${theme.colors
      .primary}; /* Altere a cor no hover para dar destaque */
  }

  display: inline-block;
  text-align: center;
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  opacity: 0.7;
  text-align: center;
  width: 100%;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 14px; /* Aumenta o tamanho da fonte para melhor visibilidade */
  }
`;
