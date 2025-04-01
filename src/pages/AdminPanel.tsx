import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getAllProperties, deleteProperty } from "../services/imovelService";
import {
  PropertyList,
  PropertyCard,
  DestaqueBadge,
} from "../styles/PropertiesStyles";
import {
  AdminContainer,
  Title,
  AddButton,
  ButtonGroup,
  DeleteButton,
  EditButton,
  StyledLink,
  TopControls,
  SearchInput,
} from "../styles/AdminPanelStyles";
import { Imovel } from "../data/ImovelData";
import ConfirmModal from "../components/ConfirmModal";

export default function AdminPanel() {
  const [properties, setProperties] = useState<Imovel[]>([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getAllProperties();
      if (Array.isArray(data)) {
        const sortedProperties = data.sort(
          (a: Imovel, b: Imovel) =>
            new Date(b.createdAt || "").getTime() -
            new Date(a.createdAt || "").getTime()
        );
        setProperties(sortedProperties);
      } else {
        console.error("Erro: dados recebidos não são um array:", data);
        setProperties([]);
      }
    };

    fetchProperties();
  }, []);

  const handleDeleteClick = (propertyId: string) => {
    setSelectedId(propertyId);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedId) return;
    const token = localStorage.getItem("token");

    try {
      await deleteProperty(selectedId, token);
      setProperties((prev) => prev.filter((p) => p._id !== selectedId));
    } catch (error) {
      console.error("Erro ao excluir imóvel:", error);
    } finally {
      setShowModal(false);
      setSelectedId(null);
    }
  };

  return (
    <AdminContainer>
      <Title>Painel Administrativo</Title>

      <TopControls>
        <SearchInput
          type="text"
          placeholder="Buscar imóvel por título..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to="/admin/adicionar">
          <AddButton>Adicionar Imóvel</AddButton>
        </Link>
      </TopControls>

      <PropertyList>
        {properties
          .filter((property) => {
            const term = search.toLowerCase();
            return (
              property.title.toLowerCase().includes(term) ||
              property.location.toLowerCase().includes(term) ||
              property.propertyType.toLowerCase().includes(term)
            );
          })
          .map((property) => (
            <motion.div
              key={property._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <PropertyCard>
                <StyledLink to={`/imoveis/${property._id}`}>
                  <div style={{ position: "relative" }}>
                    {property.destaque && (
                      <DestaqueBadge>Destaque</DestaqueBadge>
                    )}
                    {property.imageUrls && property.imageUrls.length > 0 ? (
                      <img
                        src={property.imageUrls[0]}
                        alt={property.title}
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
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
                          borderRadius: "10px",
                        }}
                      >
                        Sem imagem
                      </div>
                    )}
                  </div>
                </StyledLink>

                <h2 title={property.title}>
                  {property.title.length > 40
                    ? property.title.slice(0, 37) + "..."
                    : property.title.charAt(0).toUpperCase() +
                      property.title.slice(1)}
                </h2>

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

                <ButtonGroup>
                  <EditButton
                    title="Editar imóvel"
                    onClick={() => navigate(`/admin/editar/${property._id}`)}
                  >
                    <FaEdit /> Editar
                  </EditButton>
                  <DeleteButton
                    onClick={() => handleDeleteClick(property._id || "")}
                  >
                    <FaTrash /> Excluir
                  </DeleteButton>
                </ButtonGroup>
              </PropertyCard>
            </motion.div>
          ))}
      </PropertyList>

      {showModal && (
        <ConfirmModal
          message="Tem certeza que deseja excluir este imóvel?"
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </AdminContainer>
  );
}
