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
  DestaqueBadge, // 👈 novo badge importado
} from "../styles/ImoveisFiltradosStyles";
import { FiMaximize2 } from "react-icons/fi";
import { LuShowerHead, LuBath, LuBedDouble, LuCarFront } from "react-icons/lu";
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
      <PropertyCard style={{ position: "relative" }}>
        {imovel.destaque && <DestaqueBadge>Destaque</DestaqueBadge>}

        <PropertyImage
          src={imovel.imageUrls?.[0]}
          alt={`Imagem princial do imóvel ${imovel.title}`}
        />

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
            <Icon data-tooltip="Quartos">
              <LuBedDouble /> {imovel.bedrooms}
            </Icon>
            <Icon data-tooltip="Banheiros">
              <LuShowerHead />
              {imovel.bathrooms}
            </Icon>
            <Icon data-tooltip="Suítes">
              <LuBath /> {imovel.suites}
            </Icon>
            <Icon data-tooltip="Vagas de Garagem">
              <LuCarFront /> {imovel.garage}
            </Icon>
            <Icon data-tooltip="Área do Imóvel">
              <FiMaximize2 /> {imovel.area} m²
            </Icon>
          </IconsRow>

          <PriceRow>
            <span>R$ {imovel.price.toLocaleString("pt-BR")}</span>
          </PriceRow>
        </PropertyInfo>
      </PropertyCard>
    </Link>
  );
};

export default ImovelCardDetalhado;
