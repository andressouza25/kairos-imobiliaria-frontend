import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerButton,
} from "./styles/BannerStyles";

export default function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle>Encontre o imóvel dos seus sonhos!</BannerTitle>
        <BannerButton href="/imoveis">Ver Imóveis</BannerButton>
      </BannerContent>
    </BannerContainer>
  );
}
