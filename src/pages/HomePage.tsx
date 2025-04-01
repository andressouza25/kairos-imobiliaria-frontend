import { useEffect, useState } from "react";
import FeaturedProperties from "../components/FeaturedProperties";
import SearchBar from "../components/SearchBar";
import {
  BannerContainer,
  HomeContainer,
  FeaturedSection,
} from "../styles/HomeStyles";
import { Imovel } from "../data/ImovelData";
import ExitIntentModal from "../components/ExitIntentModal"; // <-- IMPORTADO

export default function Home() {
  const [imoveisEmDestaque, setImoveisEmDestaque] = useState<Imovel[]>([]);

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/imoveis`
        );
        const data = await response.json();

        const destacados = data
          .filter((imovel: Imovel) => imovel.destaque)
          .slice(0, 3);
        setImoveisEmDestaque(destacados);
      } catch (error) {
        console.error("Erro ao buscar imóveis em destaque:", error);
      }
    };

    fetchImoveis();
  }, []);

  return (
    <HomeContainer>
      <ExitIntentModal /> {/* ⬅️ Modal de saída inserido aqui */}
      <BannerContainer>
        <SearchBar />
      </BannerContainer>
      <FeaturedSection>
        <FeaturedProperties imoveis={imoveisEmDestaque} />
      </FeaturedSection>
    </HomeContainer>
  );
}
