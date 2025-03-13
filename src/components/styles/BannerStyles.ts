import styled from "styled-components";
import { theme } from "../../styles/theme";

/* Container principal do banner */
export const BannerContainer = styled.div`
  width: 100%;
  height: 400px;
  background-image: url("/src/assets/bannerTeste2.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Conteúdo centralizado dentro do banner */
export const BannerContent = styled.div`
  text-align: center;
  color: ${theme.colors.text};
  background: rgba(0, 0, 0, 0.65);
  padding: 20px 40px;
  border-radius: 10px;
`;

/* Título dentro do banner */
export const BannerTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${theme.colors.primary};
`;

/* Botão dentro do banner */
export const BannerButton = styled.a`
  background: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${theme.colors.darkGray};
    color: ${theme.colors.text};
  }
`;
