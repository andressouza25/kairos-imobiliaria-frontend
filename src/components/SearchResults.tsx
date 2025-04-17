import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Imovel } from "../data/ImovelData"; // Importe a interface do imóvel

const SearchResults = () => {
  const location = useLocation();
  const [imoveis, setImoveis] = useState<Imovel[]>([]);
  const searchParams = new URLSearchParams(location.search); // Pegando os filtros da URL

  useEffect(() => {
    const fetchImoveis = async () => {
      const filters = searchParams.toString();
      try {
        const response = await fetch(
          `${process.env.API_URL}/api/imoveis?${filters}`
        );
        const data = await response.json();
        setImoveis(data);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    };
    fetchImoveis();
  }, [location.search]);

  return (
    <div>
      <h2>Resultados da Busca</h2>
      {imoveis.length > 0 ? (
        imoveis.map((imovel) => (
          <div key={imovel._id}>
            <h3>{imovel.title}</h3>
            <p>{imovel.description}</p>
            <p>
              <strong>Preço:</strong> R$ {imovel.price.toLocaleString("pt-BR")}
            </p>
            <p>
              <strong>Localização:</strong> {imovel.location}
            </p>
            <p>
              <strong>Tipo:</strong> {imovel.propertyType}
            </p>
            <p>
              <strong>Quartos:</strong> {imovel.bedrooms}
            </p>
            <p>
              <strong>Área:</strong> {imovel.area} m²
            </p>
            {imovel.destaque && <span>✨ Imóvel em Destaque</span>}
          </div>
        ))
      ) : (
        <p>Nenhum imóvel encontrado.</p>
      )}
    </div>
  );
};

export default SearchResults;
