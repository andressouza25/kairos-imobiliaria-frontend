import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  LocationInputWrapper,
  LocationInputStyled,
  SuggestionsPopover,
  SuggestionsList,
  SuggestionsOption,
} from "../styles/LocationInputStyles";

interface LocationInputProps {
  value: string;
  onChange: (val: string) => void;
  variant?: "default" | "form";
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
      <LocationInputStyled
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        disabled={!ready}
        placeholder="Localização"
        $variant={variant}
        autoComplete="off"
      />

      {status === "OK" && (
        <SuggestionsPopover>
          <SuggestionsList>
            {data.map(({ place_id, description }) => (
              <SuggestionsOption
                key={place_id}
                onClick={() => handleSelect(description)}
              >
                {description}
              </SuggestionsOption>
            ))}
          </SuggestionsList>
        </SuggestionsPopover>
      )}
    </LocationInputWrapper>
  );
}
