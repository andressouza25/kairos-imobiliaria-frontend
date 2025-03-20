import { useState } from "react";
import {
  SelectWrapper,
  SelectContainer,
  Select,
  Label,
} from "../styles/SearchBarStyles";

interface SelectFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  label: string;
}

export default function SelectField({
  name,
  value,
  onChange,
  options,
  label,
}: SelectFieldProps) {
  const [isActive, setIsActive] = useState(!!value);

  const handleFocus = () => {
    if (value) setIsActive(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    if (!e.target.value) setIsActive(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
    setIsActive(true);
  };

  return (
    <SelectWrapper>
      <SelectContainer>
        {isActive && <Label isActive={isActive}>{label}</Label>}{" "}
        <Select
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {!isActive && (
            <option value="" disabled>
              {label}{" "}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </SelectContainer>
    </SelectWrapper>
  );
}
