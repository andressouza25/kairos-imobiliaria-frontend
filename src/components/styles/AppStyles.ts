import styled from "styled-components";

/* 
  PageContainer (Contêiner da Página)
  - Define a estrutura principal do site, garantindo que ocupe toda a altura da tela.
*/
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /*  Garante que a página ocupe 100% da altura da tela */
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

/* 
  Content (Conteúdo Principal)
  - Permite que o conteúdo se expanda, empurrando o Footer para o final da página.
*/
export const Content = styled.div`
  flex: 1; /*  Faz com que o conteúdo ocupe o máximo possível da tela */
`;
