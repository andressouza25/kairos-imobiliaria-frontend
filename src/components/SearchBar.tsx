import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectField from "./SearchBar/SelectField";
import LocationInput from "./SearchBar/LocationInput";
import { filterOptions } from "./SearchBar/filterOptions";
import {
  SearchContainer,
  FilterRow,
  FilterColumn,
  SearchButton,
  SearchButtonContainer,
  ToggleFiltersButton,
  ExtraFiltersContainer,
} from "./styles/SearchBarStyles";

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

  const navigate = useNavigate();

  const [showExtraFilters, setShowExtraFilters] = useState(false);

  const handleChange = (name: string, value: string) => {
    setSearchFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSearch = () => {
    const searchParams = new URLSearchParams();

    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) {
        // Capitaliza a primeira letra
        const formattedValue =
          typeof value === "string"
            ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
            : value;

        searchParams.append(key, formattedValue);
      }
    });

    navigate(`/imoveis?${searchParams.toString()}`);
  };

  return (
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
            value={searchFilters.location}
            onChange={(value) =>
              setSearchFilters((prev) => ({ ...prev, location: value }))
            }
            variant="form"
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
  );
}
