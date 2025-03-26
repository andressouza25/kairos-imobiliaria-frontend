import { Link } from "react-router-dom";
import {
  FeaturedContainer,
  PropertyList,
  ShowMoreButton,
} from "./styles/FeaturedStyles";

export default function FeaturedProperties() {
  return (
    <FeaturedContainer>
      <h2>Imóveis em Destaque</h2>
      <PropertyList>
        {/*  Aqui você renderiza os imóveis em destaque */}
      </PropertyList>

      {/* Botão para acessar a página de imóveis */}
      <Link to="/imoveis">
        <ShowMoreButton>Mostrar Imóveis</ShowMoreButton>
      </Link>
    </FeaturedContainer>
  );
}
