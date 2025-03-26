import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllProperties, deleteProperty } from "../services/imovelService";
import { PropertyList, PropertyCard } from "../styles/PropertiesStyles";
import {
  AdminContainer,
  Title,
  AddButton,
  ButtonGroup,
  DeleteButton,
  EditButton,
} from "../styles/AdminPanelStyles";

type Property = {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
  propertyType: string;
  transactionType: string;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  garage: number;
  area: number;
};

export default function AdminPanel() {
  const [properties, setProperties] = useState<Property[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getAllProperties();
      if (Array.isArray(data)) {
        setProperties(data);
      } else {
        console.error("Erro: dados recebidos não são um array:", data);
        setProperties([]); // fallback seguro
      }
    };

    fetchProperties();
  }, []);

  const handleDelete = async (propertyId: string) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Você precisa estar logado.");
      return;
    }

    if (window.confirm("Tem certeza que deseja excluir este imóvel?")) {
      try {
        await deleteProperty(propertyId, token);
        setProperties((prev) => prev.filter((p) => p._id !== propertyId));
      } catch (error) {
        console.error("Erro ao excluir imóvel:", error);
      }
    }
  };

  return (
    <AdminContainer>
      <Title>Painel Administrativo</Title>
      <Link to="/admin/adicionar">
        <AddButton>Adicionar Imóvel</AddButton>
      </Link>

      <PropertyList>
        {properties.map((property) => (
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
            <ButtonGroup>
              <EditButton
                onClick={() => navigate(`/admin/editar/${property._id}`)}
              >
                Editar
              </EditButton>
              <DeleteButton onClick={() => handleDelete(property._id)}>
                Excluir
              </DeleteButton>
            </ButtonGroup>
          </PropertyCard>
        ))}
      </PropertyList>
    </AdminContainer>
  );
}
