import styled from "styled-components";

const FeaturedContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function FeaturedProperties() {
  return (
    <FeaturedContainer>
      <h2>Imóveis em Destaque</h2>
    </FeaturedContainer>
  );
}
