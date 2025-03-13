import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.secondary}; /* Cor de fundo azul escuro */
  color: ${theme.colors.text}; /* Cor do texto branco */
  text-align: center; /* Centraliza o conteúdo do rodapé */
  padding: 16px 0; /* Adiciona espaçamento interno no topo e na base */
  position: relative; /* Mantém o rodapé fixo na estrutura da página */
  bottom: 0; /* Mantém o rodapé na parte inferior */
  width: 100%; /* Garante que o rodapé ocupe toda a largura */
  bottom: 0; /*  Fixa o footer na parte inferior */
`;

export const FooterText = styled.p`
  margin: 0; /* Remove margens externas para um alinhamento melhor */
  padding-top: 10px;
  font-size: 12px; /* Define o tamanho do texto do rodapé */
  color: ${theme.colors.text};
`;

export const FooterInfo = styled.div`
  margin-top: 3px;
  font-size: 16px;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: ${theme.colors.text};
`;
export const Icon = styled.span`
  color: ${theme.colors.primary};
  margin-right: 8px;
  font-size: 18px;
`;

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #25d366;
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  margin-top: 20px;
  width: fit-content;
  margin: auto;

  &:hover {
    background: #1ebe57;
  }

  svg {
    font-size: 20px;
  }
`;
