import { FC } from "react";
import ImovelCardDetalhado from "./ImovelCardDetalhados";
import {
  FeaturedSection,
  FeaturedTitle,
  FeaturedPropertiesGrid,
} from "../styles/HomeStyles";
import { Imovel } from "../data/ImovelData";

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
    </FeaturedSection>
  );
};

export default FeaturedProperties;
