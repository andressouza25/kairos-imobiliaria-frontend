import { useState } from "react";
import SelectField from "./SearchBar/SelectField";
import LocationInput from "./SearchBar/LocationInput";
import { filterOptions } from "./SearchBar/filterOptions";
import {
  SearchContainer,
  FilterRow,
  FilterColumn,
  SearchButton,
  SearchButtonContainer,
  BannerContainer,
  ToggleFiltersButton,
  ExtraFiltersContainer,
} from "./styles/SearchBarStyles";

// Interface para tipar os imóveis
export interface Imovel {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
  transactionType: string;
  propertyType: string;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  garage: number;
  area: number;
  destaque: boolean;
}

export default function SearchBar() {
  const [searchFilters, setSearchFilters] = useState({
    transactionType: "",
    propertyType: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    suites: "",
    garage: "",
    area: "",
    priceRange: "",
  });

  const [showExtraFilters, setShowExtraFilters] = useState(false);
  const [imoveis, setImoveis] = useState<Imovel[]>([]); // Tipando o estado com Imovel[]

  const handleChange = (name: string, value: string) => {
    setSearchFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSearch = async () => {
    console.log("🔍 Filtros aplicados:", searchFilters);

    try {
      const searchParams = new URLSearchParams(searchFilters).toString();
      const response = await fetch(
        `${process.env.API_URL}/api/imoveis?${searchParams}`
      );
      const data = await response.json();

      if (response.ok) {
        setImoveis(data); // Armazenar os imóveis filtrados no estado
      } else {
        console.error("Erro ao buscar imóveis:", data.message);
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
    }
  };

  return (
    <BannerContainer>
      <SearchContainer>
        <FilterRow>
          {/* Box "Pretensão" */}
          <FilterColumn>
            <SelectField
              name="transactionType"
              label="Pretensão"
              value={searchFilters.transactionType}
              onChange={(e) => handleChange("transactionType", e.target.value)}
              options={filterOptions.transactionType}
            />
          </FilterColumn>

          {/* Box "Tipo" */}
          <FilterColumn>
            <SelectField
              name="propertyType"
              label="Tipo"
              value={searchFilters.propertyType}
              onChange={(e) => handleChange("propertyType", e.target.value)}
              options={filterOptions.propertyType}
            />
          </FilterColumn>

          {/* Barra de localização */}
          <FilterColumn wide>
            <LocationInput
              onChange={(value) => handleChange("location", value)}
            />
          </FilterColumn>

          {/* Botão "Filtros" */}
          <FilterColumn small>
            <ToggleFiltersButton
              onClick={() => setShowExtraFilters(!showExtraFilters)}
            >
              {showExtraFilters ? "⮝ Ocultar" : "⮟ Filtros"}
            </ToggleFiltersButton>
          </FilterColumn>

          {/* Botão "Buscar" */}
          <SearchButtonContainer>
            <SearchButton onClick={handleSearch}>Buscar</SearchButton>
          </SearchButtonContainer>
        </FilterRow>

        {/* Filtros adicionais */}
        {showExtraFilters && (
          <ExtraFiltersContainer>
            {/* Coluna 1: Quartos & Suítes */}
            <FilterColumn>
              <SelectField
                name="bedrooms"
                label="Quartos"
                value={searchFilters.bedrooms}
                onChange={(e) => handleChange("bedrooms", e.target.value)}
                options={filterOptions.bedrooms}
              />
            </FilterColumn>
            <FilterColumn>
              <SelectField
                name="suites"
                label="Suítes"
                value={searchFilters.suites}
                onChange={(e) => handleChange("suites", e.target.value)}
                options={filterOptions.suites}
              />
            </FilterColumn>

            {/* Coluna 2: Banheiros & Vagas */}
            <FilterColumn>
              <SelectField
                name="bathrooms"
                label="Banheiros"
                value={searchFilters.bathrooms}
                onChange={(e) => handleChange("bathrooms", e.target.value)}
                options={filterOptions.bathrooms}
              />
            </FilterColumn>
            <FilterColumn>
              <SelectField
                name="garage"
                label="Vagas"
                value={searchFilters.garage}
                onChange={(e) => handleChange("garage", e.target.value)}
                options={filterOptions.garage}
              />
            </FilterColumn>

            {/* Coluna 3: Área & Faixa de Preço */}
            <FilterColumn>
              <SelectField
                name="area"
                label="Área"
                value={searchFilters.area}
                onChange={(e) => handleChange("area", e.target.value)}
                options={filterOptions.area}
              />
            </FilterColumn>
            <FilterColumn>
              <SelectField
                name="priceRange"
                label="Faixa de Preço"
                value={searchFilters.priceRange}
                onChange={(e) => handleChange("priceRange", e.target.value)}
                options={filterOptions.priceRange}
              />
            </FilterColumn>
          </ExtraFiltersContainer>
        )}
      </SearchContainer>

      {/* Exibir imóveis filtrados */}
      <div>
        {imoveis.length > 0 ? (
          imoveis.map((imovel) => (
            <div key={imovel._id} className="imovel-card">
              <img src={imovel.imageUrl} alt={imovel.title} />
              <h3>{imovel.title}</h3>
              <p>{imovel.description}</p>
              <p>
                <strong>Preço:</strong> R${" "}
                {imovel.price.toLocaleString("pt-BR")}
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
    </BannerContainer>
  );
}
