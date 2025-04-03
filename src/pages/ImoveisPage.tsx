import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // SEO

import {
  PageContainer,
  Title,
  PropertiesGrid,
} from "../styles/ImoveisFiltradosStyles";
import { Imovel } from "../data/ImovelData";
import ImovelCardDetalhado from "../components/ImovelCardDetalhados";
import SearchBar from "../components/SearchBar";
import { motion } from "framer-motion";
import ExitIntentModal from "../components/ExitIntentModal";

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
      <Helmet>
        <title>Imóveis à Venda e para Alugar | Kairós Imobiliária</title>
        <meta
          name="description"
          content="Confira todos os imóveis disponíveis para venda ou aluguel. Filtre por tipo, localização, valor e mais."
        />
      </Helmet>

      <ExitIntentModal />
      <SearchBar />

      <Title>
        {hasFilters ? "Resultados da Busca" : "Imóveis Disponíveis"}
      </Title>

      {loading ? (
        <p>Carregando...</p>
      ) : imoveis.length === 0 ? (
        <p>Nenhum imóvel encontrado.</p>
      ) : (
        <PropertiesGrid>
          {imoveis.map((imovel) => (
            <motion.div
              key={imovel._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ImovelCardDetalhado imovel={imovel} />
            </motion.div>
          ))}
        </PropertiesGrid>
      )}
    </PageContainer>
  );
}
