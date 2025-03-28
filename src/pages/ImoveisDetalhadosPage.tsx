import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../services/imovelService";
import { PropertyDetailsContainer } from "../styles/PropertyDetailsStyles";

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
    console.log("Property ID:", id); // 🔥 Verificar se o ID está correto na URL
    const fetchProperty = async () => {
      if (id) {
        const data = await getPropertyById(id);
        console.log("Fetched Property:", data); // 🔥 Verificar se os dados do imóvel estão sendo recebidos
        setProperty(data);
      }
    };
    fetchProperty();
  }, [id]);

  if (!property) {
    return <p>Loading property details...</p>;
  }

  return (
    <PropertyDetailsContainer>
      <img src={property.imageUrl} alt={property.title} />
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>
        <strong>Price:</strong> ${property.price}
      </p>
      <p>
        <strong>Location:</strong> {property.location}
      </p>
    </PropertyDetailsContainer>
  );
}
