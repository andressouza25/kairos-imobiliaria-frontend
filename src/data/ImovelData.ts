export type Imovel = {
  _id?: string;
  title: string;
  description: string;
  price: string | number;
  location: string;
  imageUrls: string[];
  propertyType: string;
  transactionType: string;
  bedrooms: string | number;
  suites: string | number;
  bathrooms: string | number;
  garage: string | number;
  area: string | number;
  destaque: boolean;
};

// Tipo usado exclusivamente para o formulário de criação/edição de imóvel
export type ImovelFormType = {
  title: string;
  description: string;
  price: string; // string porque vem do input
  location: string;
  imageUrls: string[]; // array de URLs das imagens
  propertyType: string;
  transactionType: string;
  bedrooms: string; // todos os campos numéricos como string
  suites: string;
  bathrooms: string;
  garage: string;
  area: string;
  destaque: boolean;
};
