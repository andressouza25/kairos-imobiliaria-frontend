import { FC } from "react";
import { Link } from "react-router-dom";
import {
  PropertyCard,
  PropertyImage,
  PropertyInfo,
  PropertyTitle,
  PropertyDescription,
  PropertyLocation,
  PropertyTypeAndTransaction,
  IconsRow,
  Icon,
  PriceRow,
  PropertyTag,
} from "../styles/ImoveisFiltradosStyles";
import { FiHome, FiMaximize2 } from "react-icons/fi";
import { LuBath, LuBedDouble, LuCarFront } from "react-icons/lu";
import { Imovel } from "../data/ImovelData";

type Props = {
  imovel: Imovel;
};

const ImovelCardDetalhado: FC<Props> = ({ imovel }) => {
  return (
    <Link
      to={`/imoveis/${imovel._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <PropertyCard>
        <PropertyImage src={imovel.imageUrls?.[0]} alt={imovel.title} />
        <PropertyInfo>
          <PropertyTitle>{imovel.title}</PropertyTitle>
          <PropertyDescription>{imovel.description}</PropertyDescription>
          <PropertyLocation>{imovel.location}</PropertyLocation>

          <PropertyTypeAndTransaction>
            <span>
              <strong>Tipo:</strong> {imovel.propertyType}
            </span>
            <span>
              <strong>Pretenção:</strong> {imovel.transactionType}
            </span>
          </PropertyTypeAndTransaction>

          <IconsRow>
            <Icon>
              <FiHome /> {imovel.bedrooms}
            </Icon>
            <Icon>
              <LuBath /> {imovel.bathrooms}
            </Icon>
            <Icon>
              <LuBedDouble /> {imovel.suites}
            </Icon>
            <Icon>
              <LuCarFront /> {imovel.garage}
            </Icon>
            <Icon>
              <FiMaximize2 /> {imovel.area} m²
            </Icon>
          </IconsRow>

          <PriceRow>
            <span>R$ {imovel.price.toLocaleString("pt-BR")}</span>
            {imovel.destaque && <PropertyTag>Destaque</PropertyTag>}
          </PriceRow>
        </PropertyInfo>
      </PropertyCard>
    </Link>
  );
};

export default ImovelCardDetalhado;
