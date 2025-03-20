import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {
  LocationInputWrapper,
  LocationInputStyled,
} from "../styles/SearchBarStyles";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function LocationInput({ onChange }: LocationInputProps) {
  const {
    ready,
    value: inputValue,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
    onChange(address);

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    console.log("Coordenadas:", { lat, lng });
  };

  return (
    <LocationInputWrapper>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          as={LocationInputStyled} // 🔥 Usa o novo estilo
          value={inputValue}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          disabled={!ready}
          placeholder="Digite a localização..."
        />
        <ComboboxPopover>
          {status === "OK" && (
            <ComboboxList>
              {data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
            </ComboboxList>
          )}
        </ComboboxPopover>
      </Combobox>
    </LocationInputWrapper>
  );
}
