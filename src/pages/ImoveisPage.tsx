// src/pages/ImoveisPage.tsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  PageContainer,
  Title,
  PropertiesGrid,
} from "../styles/ImoveisFiltradosStyles";
import { Imovel } from "../data/ImovelData";
import ImovelCardDetalhado from "../components/ImovelCardDetalhados"; // Verifique se o nome do componente está correto
import SearchBar from "../components/SearchBar";

export default function ImoveisPage() {
  const location = useLocation();
  const [imoveis, setImoveis] = useState<Imovel[]>([]);
  const [loading, setLoading] = useState(true);

  const hasFilters = !!location.search;

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const url = hasFilters
          ? `${import.meta.env.VITE_API_URL}/api/imoveis${location.search}`
          : `${import.meta.env.VITE_API_URL}/api/imoveis`;

        const response = await fetch(url);
        const data = await response.json();
        setImoveis(data);
      } catch (error) {
        console.error("❌ Erro ao buscar imóveis:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [location.search]);

  return (
    <PageContainer>
      {/* Barra de busca */}
      <SearchBar />

      {/* Título com base na presença de filtros */}
      <Title>
        {hasFilters ? "Resultados da Busca" : "Imóveis Disponíveis"}
      </Title>

      {/* Exibe o estado de carregamento ou a mensagem de imóveis não encontrados */}
      {loading ? (
        <p>Carregando...</p>
      ) : imoveis.length === 0 ? (
        <p>Nenhum imóvel encontrado.</p>
      ) : (
        // Exibe a lista de imóveis
        <PropertiesGrid>
          {imoveis.map((imovel) => (
            <ImovelCardDetalhado key={imovel._id} imovel={imovel} />
          ))}
        </PropertiesGrid>
      )}
    </PageContainer>
  );
}
