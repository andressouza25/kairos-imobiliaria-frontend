import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Função para obter um imóvel pelo ID
export const getPropertyById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar imóvel:", error);
    throw error;
  }
};

// Função para buscar todos os imóveis
export const getAllProperties = async () => {
  const response = await axios.get(`${API_URL}/api/imoveis`);
  return response.data;
};

export const deleteProperty = async (id: string, token: string | null) => {
  try {
    const response = await axios.delete(`${API_URL}/api/imoveis/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar imóvel:", error);
    throw error;
  }
};
