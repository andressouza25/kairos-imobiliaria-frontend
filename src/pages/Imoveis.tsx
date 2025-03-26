import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProperties } from "../services/imovelService";
import {
  PropertyList,
  PropertyCard,
  PageTitle,
  DetailsButton,
} from "../styles/PropertiesStyles";

type Property = {
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
};

export default function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getAllProperties();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  return (
    <>
      <PageTitle>Imóveis Disponíveis</PageTitle>
      <PropertyList>
        {properties.length === 0 ? (
          <p>Nenhum imóvel encontrado.</p>
        ) : (
          properties.map((property) => (
            <PropertyCard key={property._id}>
              <Link to={`/imoveis/${property._id}`}>
                <img src={property.imageUrl} alt={property.title} />
                <h2>
                  {property.title.charAt(0).toUpperCase() +
                    property.title.slice(1)}
                </h2>{" "}
                {/* Primeira letra maiúscula */}
              </Link>
              <p>
                {property.description.charAt(0).toUpperCase() +
                  property.description.slice(1)}
              </p>{" "}
              {/* Primeira letra maiúscula */}
              <p>
                <strong>Preço:</strong> R${" "}
                {property.price.toLocaleString("pt-BR")}
              </p>
              <p>
                <strong>Localização:</strong>{" "}
                {property.location.charAt(0).toUpperCase() +
                  property.location.slice(1)}
              </p>
              <p>
                <strong>Pretensão:</strong>{" "}
                {property.transactionType.charAt(0).toUpperCase() +
                  property.transactionType.slice(1)}
              </p>
              <p>
                <strong>Tipo:</strong>{" "}
                {property.propertyType.charAt(0).toUpperCase() +
                  property.propertyType.slice(1)}
              </p>
              <p>
                <strong>Quartos:</strong> {property.bedrooms}
              </p>
              <p>
                <strong>Suítes:</strong> {property.suites}
              </p>
              <p>
                <strong>Banheiros:</strong> {property.bathrooms}
              </p>
              <p>
                <strong>Vagas:</strong> {property.garage}
              </p>
              <em>
                <strong>Área:</strong> {property.area} m²
              </em>
              <Link to={`/imoveis/${property._id}`}>
                <DetailsButton>Ver mais detalhes</DetailsButton>
              </Link>
            </PropertyCard>
          ))
        )}
      </PropertyList>
    </>
  );
}
