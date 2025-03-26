import { FC } from "react";

type Imovel = {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
  transactionType: string;
  propertyType: string;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  garage: number;
  area: number;
  destaque: boolean;
};

const ImovelCard: FC<{ imovel: Imovel }> = ({ imovel }) => {
  return (
    <div className="imovel-card">
      <img src={imovel.imageUrl} alt={imovel.title} />
      <h3>{imovel.title}</h3>
      <p>{imovel.description}</p>
      <p>
        <strong>Preço:</strong> R$ {imovel.price.toLocaleString("pt-BR")}
      </p>
      <p>
        <strong>Localização:</strong> {imovel.location}
      </p>
      <p>
        <strong>Tipo:</strong> {imovel.propertyType}
      </p>
      <p>
        <strong>Quartos:</strong> {imovel.bedrooms}
      </p>
      <p>
        <strong>Área:</strong> {imovel.area} m²
      </p>
      {imovel.destaque && <span>✨ Imóvel em Destaque</span>}
    </div>
  );
};

export default ImovelCard;
