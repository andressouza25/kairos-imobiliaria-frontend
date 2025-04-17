export type Imovel = {
  _id?: string;
  title: string;
  description: string;
  price: string | number;
  location: string;
  imageUrls: { url: string; public_id: string }[]; // Alteração aqui
  propertyType: string;
  transactionType: string;
  bedrooms: string | number;
  suites: string | number;
  bathrooms: string | number;
  garage: string | number;
  area: string | number;
  destaque: boolean;
  createdAt?: string;
};

// Tipo usado exclusivamente para o formulário de criação/edição de imóvel
export type ImovelFormType = {
  title: string;
  description: string;
  price: number; // Mudar de string para number
  location: string;
  imageUrls: { url: string; public_id: string }[]; // Array de objetos com url e public_id
  propertyType: string;
  transactionType: string;
  bedrooms: number; // Mudar de string para number
  suites: number; // Mudar de string para number
  bathrooms: number; // Mudar de string para number
  garage: number; // Mudar de string para number
  area: number; // Mudar de string para number
  destaque: boolean;
  createdAt?: string;
};
