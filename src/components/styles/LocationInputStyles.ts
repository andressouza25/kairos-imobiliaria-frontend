// LocationInputStyles.ts
import styled from "styled-components";
import { theme } from "../../styles/theme";
import {
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

export const LocationInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const LocationInputStyled = styled(ComboboxInput)<{
  $variant?: "default" | "form";
}>`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  height: 50px;
  transition: 0.3s ease all;
  background: ${theme.colors.text};
  color: ${({ $variant }) =>
    $variant === "form" ? theme.colors.darkGray : theme.colors.darkGray};

  &::placeholder {
    color: ${theme.colors.lightText};
  }

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 5px rgba(243, 152, 32, 0.3);
  }
`;

export const SuggestionsPopover = styled(ComboboxPopover)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: white;
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  margin-top: 5px;
`;

export const SuggestionsList = styled(ComboboxList)`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SuggestionsOption = styled(ComboboxOption)`
  padding: 10px;
  cursor: pointer;
  background-color: ${theme.colors.background};
  color: ${theme.colors.darkGray};

  &:hover {
    background-color: ${theme.colors.primary};
    color: white;
  }
`;
