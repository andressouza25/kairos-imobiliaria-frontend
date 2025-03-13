import styled from "styled-components";

/* 🔥 Botão Flutuante de WhatsApp */
export const FloatingWhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px; /* Distância do rodapé */
  right: 20px; /* Distância da lateral direita */
  background: #25d366; /* Cor oficial do WhatsApp */
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 24px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: 0.3s ease-in-out;
  z-index: 1000; /* 🔥 Garante que fique sempre acima dos outros elementos */

  &:hover {
    background: #1ebe57;
  }
`;
