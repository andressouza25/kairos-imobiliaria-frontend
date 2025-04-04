import { FC } from "react";
import ImovelCardDetalhado from "./ImovelCardDetalhados"; // Usando o card de imóvel
import {
  FeaturedSection,
  FeaturedTitle,
  FeaturedPropertiesGrid,
  SeeMoreButton,
} from "../styles/HomeStyles"; // Usando estilos definidos
import { Imovel } from "../data/ImovelData"; // Importando a tipagem do Imovel
import { Link } from "react-router-dom";

type Props = {
  imoveis: Imovel[]; // Agora tipado corretamente como Imovel[]
};

const FeaturedProperties: FC<Props> = ({ imoveis }) => {
  return (
    <FeaturedSection>
      <FeaturedTitle>Imóveis em Destaque</FeaturedTitle>
      <FeaturedPropertiesGrid>
        {imoveis.map((imovel) => (
          <ImovelCardDetalhado key={imovel._id} imovel={imovel} />
        ))}
      </FeaturedPropertiesGrid>
      <Link to="/imoveis">
        <SeeMoreButton>Ver mais imóveis</SeeMoreButton>
      </Link>
    </FeaturedSection>
  );
};

export default FeaturedProperties;
