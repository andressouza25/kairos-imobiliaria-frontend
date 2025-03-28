import { useState, useEffect } from "react";
import {
  FormContainer,
  InputField,
  Label,
  SubmitButton,
  FormSection,
  CheckboxLabel,
  FormTitle,
  SelectField,
} from "../styles/ImovelAddAndEditPage";
import LocationInput from "./SearchBar/LocationInput";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import { ImovelFormType } from "../data/ImovelData";

type Props = {
  initialData?: ImovelFormType;
  onSubmit: (data: ImovelFormType) => void;
  isEditMode?: boolean;
};

export default function ImovelForm({
  initialData,
  onSubmit,
  isEditMode = false,
}: Props) {
  const [formData, setFormData] = useState<ImovelFormType>(() => {
    return (
      initialData || {
        title: "",
        description: "",
        price: "",
        location: "",
        imageUrls: [],
        propertyType: "",
        transactionType: "",
        bedrooms: "",
        suites: "",
        bathrooms: "",
        garage: "",
        area: "",
        destaque: false,
      }
    );
  });

  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  useEffect(() => {
    if (initialData?.imageUrls) {
      setPreviewUrls(initialData.imageUrls);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, destaque: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <FormTitle>{isEditMode ? "Editar Imóvel" : "Adicionar Imóvel"}</FormTitle>
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
          <Label>Imagens</Label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={async (e) => {
              const files = e.target.files;
              if (!files) return;

              for (let i = 0; i < files.length; i++) {
                const file = files[i];

                const localUrl = URL.createObjectURL(file);
                setPreviewUrls((prev) => [...prev, localUrl]);

                try {
                  const uploadedUrl = await uploadToCloudinary(file);
                  setFormData((prev) => ({
                    ...prev,
                    imageUrls: [...prev.imageUrls, uploadedUrl],
                  }));
                } catch (error) {
                  console.error("Erro ao enviar imagem:", error);
                }
              }
            }}
          />
          {previewUrls.length > 0 && (
            <div style={{ marginTop: "10px" }}>
              <h4>Pré-visualização:</h4>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {previewUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Preview ${index + 1}`}
                    style={{ width: "150px", borderRadius: "8px" }}
                  />
                ))}
              </div>
            </div>
          )}
        </FormSection>

        <FormSection>
          <Label>Tipo</Label>
          <SelectField
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
          >
            <option value="">Selecione o tipo</option>
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
          </SelectField>
        </FormSection>

        <FormSection>
          <Label>Pretensão</Label>
          <SelectField
            name="transactionType"
            value={formData.transactionType}
            onChange={handleChange}
          >
            <option value="">Selecione a pretensão</option>
            <option value="Comprar">Comprar</option>
            <option value="Alugar">Alugar</option>
          </SelectField>
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
          <Label>Vagas</Label>
          <InputField
            type="number"
            name="garage"
            value={formData.garage}
            onChange={handleChange}
            placeholder="Garagem"
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

        <SubmitButton type="submit">
          {isEditMode ? "Salvar Alterações" : "Adicionar Imóvel"}
        </SubmitButton>
      </form>
    </FormContainer>
  );
}
