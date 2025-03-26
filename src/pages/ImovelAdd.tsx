import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  InputField,
  Label,
  SubmitButton,
  FormSection,
  CheckboxLabel,
  FormTitle,
} from "../styles/ImovelAddAndEditPage"; // Estilos importados
import LocationInput from "../components/SearchBar/LocationInput"; // Importe o componente LocationInput

const API_URL = import.meta.env.VITE_API_URL;

type FormData = {
  title: string;
  description: string;
  price: string;
  location: string;
  imageUrl: string;
  propertyType: string;
  transactionType: string;
  bedrooms: string;
  suites: string;
  bathrooms: string;
  garage: string;
  area: string;
  destaque: boolean;
};

export default function AddImovel() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    price: "",
    location: "",
    imageUrl: "",
    propertyType: "",
    transactionType: "",
    bedrooms: "",
    suites: "",
    bathrooms: "",
    garage: "",
    area: "",
    destaque: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      destaque: e.target.checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    await fetch(`${API_URL}/api/imoveis`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    navigate("/admin");
  };

  return (
    <FormContainer>
      <FormTitle>Adicionar Imóvel</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormSection>
          <Label>Título</Label>
          <InputField
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Título"
          />
        </FormSection>

        <FormSection>
          <Label>Descrição</Label>
          <InputField
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descrição"
          />
        </FormSection>

        <FormSection>
          <Label>Preço</Label>
          <InputField
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Preço"
          />
        </FormSection>

        {/* Aqui está o campo de localização com as sugestões do Google */}
        <FormSection>
          <Label>Localização</Label>
          <LocationInput
            value={formData.location}
            onChange={(val) =>
              setFormData((prev) => ({ ...prev, location: val }))
            }
            variant="form"
          />
        </FormSection>

        <FormSection>
          <Label>URL da Imagem</Label>
          <InputField
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="URL da Imagem"
          />
        </FormSection>

        <FormSection>
          <Label>Tipo (Casa/Apartamento)</Label>
          <InputField
            type="text"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            placeholder="Tipo (Casa/Apartamento)"
          />
        </FormSection>

        <FormSection>
          <Label>Pretensão (Comprar/Alugar)</Label>
          <InputField
            type="text"
            name="transactionType"
            value={formData.transactionType}
            onChange={handleChange}
            placeholder="Pretensão (Comprar/Alugar)"
          />
        </FormSection>

        <FormSection>
          <Label>Quartos</Label>
          <InputField
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            placeholder="Quartos"
          />
        </FormSection>

        <FormSection>
          <Label>Suítes</Label>
          <InputField
            type="number"
            name="suites"
            value={formData.suites}
            onChange={handleChange}
            placeholder="Suítes"
          />
        </FormSection>

        <FormSection>
          <Label>Banheiros</Label>
          <InputField
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            placeholder="Banheiros"
          />
        </FormSection>

        <FormSection>
          <Label>Vagas de Garagem</Label>
          <InputField
            type="number"
            name="garage"
            value={formData.garage}
            onChange={handleChange}
            placeholder="Vagas de Garagem"
          />
        </FormSection>

        <FormSection>
          <Label>Área (m²)</Label>
          <InputField
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Área"
          />
        </FormSection>

        <FormSection>
          <CheckboxLabel>
            <input
              type="checkbox"
              name="destaque"
              checked={formData.destaque}
              onChange={handleCheckboxChange}
            />
            Destaque na Home
          </CheckboxLabel>
        </FormSection>

        <SubmitButton type="submit">Adicionar Imóvel</SubmitButton>
      </form>
    </FormContainer>
  );
}
