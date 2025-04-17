import { FC } from "react";
import { Imovel } from "../data/ImovelData";

const ImovelCard: FC<{ imovel: Imovel }> = ({ imovel }) => {
  // Verifica a imagem principal
  console.log("Imagem principal:", imovel.imageUrls?.[0]?.url);

  return (
    <div className="imovel-card">
      {/* Exibe a primeira imagem usando a propriedade 'url' */}
      <img
        src={imovel.imageUrls?.[0]?.url} // Acessando a propriedade 'url' do primeiro item
        alt={`Imagem do Imóvel ${imovel.title}`}
      />
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
