import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../services/imovelService";
import { PropertyDetailsContainer } from "../styles/PropertyDetailsStyles";
import { Helmet } from "react-helmet-async";

type Property = {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
};

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (id) {
        const data = await getPropertyById(id);
        setProperty(data);
      }
    };
    fetchProperty();
  }, [id]);

  if (!property) {
    return <p>Carregando detalhes do imóvel...</p>;
  }

  return (
    <PropertyDetailsContainer>
      <Helmet>
        <title>{property.title} | Kairós Imobiliária</title>
        <meta name="description" content={property.description.slice(0, 150)} />
      </Helmet>

      <img src={property.imageUrl} alt={property.title} />
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>
        <strong>Preço:</strong> R$ {property.price.toLocaleString("pt-BR")}
      </p>
      <p>
        <strong>Localização:</strong> {property.location}
      </p>
    </PropertyDetailsContainer>
  );
}
