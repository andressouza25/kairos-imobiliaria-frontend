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
  StyledLink,
} from "../styles/AdminPanelStyles";
import { Imovel } from "../data/ImovelData";

export default function AdminPanel() {
  const [properties, setProperties] = useState<Imovel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getAllProperties();
      if (Array.isArray(data)) {
        setProperties(data);
      } else {
        console.error("Erro: dados recebidos não são um array:", data);
        setProperties([]);
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

    if (
      propertyId &&
      window.confirm("Tem certeza que deseja excluir este imóvel?")
    ) {
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

      {/* Centralizando o botão "Adicionar Imóvel" */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Link to="/admin/adicionar">
          <AddButton>Adicionar Imóvel</AddButton>
        </Link>
      </div>

      <PropertyList>
        {properties.map((property) => {
          const imageUrl = property.imageUrls?.[0];
          return (
            <PropertyCard key={property._id}>
              <StyledLink to={`/imoveis/${property._id}`}>
                {imageUrl ? (
                  <img src={imageUrl} alt={property.title} />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "150px",
                      backgroundColor: "#ccc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontStyle: "italic",
                    }}
                  >
                    Sem imagem
                  </div>
                )}
                <h2>
                  {property.title.charAt(0).toUpperCase() +
                    property.title.slice(1)}
                </h2>
              </StyledLink>

              <p>
                {property.description.charAt(0).toUpperCase() +
                  property.description.slice(1)}
              </p>
              <p>
                <strong>Localização:</strong> {property.location}
              </p>
              <p>
                <strong>Preço:</strong> R${" "}
                {property.price.toLocaleString("pt-BR")}
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

              {/* Exibe a tag de destaque se o imóvel estiver em destaque */}
              {property.destaque && (
                <span style={{ color: "orange", fontWeight: "bold" }}>
                  Destaque
                </span>
              )}

              <ButtonGroup>
                <EditButton
                  onClick={() => navigate(`/admin/editar/${property._id}`)}
                >
                  Editar
                </EditButton>
                <DeleteButton onClick={() => handleDelete(property._id || "")}>
                  Excluir
                </DeleteButton>
              </ButtonGroup>
            </PropertyCard>
          );
        })}
      </PropertyList>
    </AdminContainer>
  );
}
