import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProperties } from "../services/propertyService";
import { PropertyList, PropertyCard } from "../styles/PropertiesStyles";

type Property = {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
};

export default function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getAllProperties();
      console.log("Fetched Properties:", data); // 🔥 Verificar os dados no console
      setProperties(data);
    };
    fetchProperties();
  }, []);

  return (
    <PropertyList>
      <h1>Imóveis Disponveis</h1>
      {properties.length === 0 ? (
        <p>No properties found</p>
      ) : (
        properties.map((property) => (
          <PropertyCard key={property._id}>
            <Link to={`/imoveis/${property._id}`}>
              <img src={property.imageUrl} alt={property.title} />
              <h2>{property.title}</h2>
            </Link>
            <p>{property.description}</p>
            <p>
              <strong>Price:</strong> ${property.price}
            </p>
            <p>
              <strong>Location:</strong> {property.location}
            </p>
          </PropertyCard>
        ))
      )}
    </PropertyList>
  );
}
