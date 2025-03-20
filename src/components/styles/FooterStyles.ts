import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.secondary}; /* Cor de fundo */
  color: ${theme.colors.text}; /* Cor do texto */
  padding: 20px 0;
  width: 100%;
  position: relative;
  bottom: 0;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 5px;
  font-size: 12px;
  font-weight: bold;
  p {
    display: flex;
    align-items: center; /* 🔥 Garante que o ícone e o texto fiquem alinhados */
    gap: 8px;
  }
`;

export const FooterText = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  opacity: 0.7;
  text-align: center;
  width: 100%;
  margin-top: 10px;
`;

export const Icon = styled.span`
  color: ${theme.colors.primary};
  font-size: 14px;
  display: flex;
  align-items: center;
`;
