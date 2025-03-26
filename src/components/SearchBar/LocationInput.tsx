import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  // ComboboxPopover,
  // ComboboxList,
  // ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import {
  LocationInputWrapper,
  LocationInputStyled,
  SuggestionsPopover,
  SuggestionsList,
  SuggestionsOption,
} from "../styles/LocationInputStyles"; // Importando os novos estilos

interface LocationInputProps {
  value: string;
  onChange: (val: string) => void;
  variant?: "default" | "form"; // permite controlar o estilo
}

export default function LocationInput({
  value,
  onChange,
  variant = "default",
}: LocationInputProps) {
  const {
    ready,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300 });

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
    onChange(address);

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    console.log("📍 Coordenadas selecionadas:", lat, lng);
  };

  return (
    <LocationInputWrapper>
      <Combobox onSelect={handleSelect}>
        <LocationInputStyled
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          disabled={!ready}
          placeholder="Localização"
          $variant={variant}
        />

        {status === "OK" && (
          <SuggestionsPopover>
            <SuggestionsList>
              {data.map(({ place_id, description }) => (
                <SuggestionsOption key={place_id} value={description} />
              ))}
            </SuggestionsList>
          </SuggestionsPopover>
        )}
      </Combobox>
    </LocationInputWrapper>
  );
}
