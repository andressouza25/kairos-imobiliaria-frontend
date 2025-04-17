import { FC } from "react";
import ImovelCardDetalhado from "./ImovelCardDetalhados";
import {
  FeaturedSection,
  FeaturedTitle,
  FeaturedPropertiesGrid,
  SeeMoreButton,
} from "../styles/HomeStyles";
import { Imovel } from "../data/ImovelData";
import { Link } from "react-router-dom";

type Props = {
  imoveis: Imovel[];
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
