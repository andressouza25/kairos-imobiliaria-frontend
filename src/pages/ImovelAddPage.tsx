import { useNavigate } from "react-router-dom";
import ImovelForm from "../components/ImovelForm";
import { Imovel } from "../data/ImovelData";
import { Helmet } from "react-helmet-async";

const API_URL = import.meta.env.VITE_API_URL;

export default function AddImovel() {
  const navigate = useNavigate();

  const handleCreate = async (data: Imovel) => {
    const formattedData = {
      ...data,
      price: parseFloat(data.price as string), // Convertendo price para número
      bedrooms: parseInt(data.bedrooms as string), // Convertendo para número
      suites: parseInt(data.suites as string),
      bathrooms: parseInt(data.bathrooms as string),
      garage: parseInt(data.garage as string),
      area: parseInt(data.area as string),
    };

    console.log("Dados formatados para envio:", formattedData);

    const token = localStorage.getItem("token");
    await fetch(`${API_URL}/api/imoveis`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    navigate("/admin");
  };

  return (
    <>
      <Helmet>
        <title>Adicionar Imóvel | Painel Administrativo</title>
        <meta
          name="description"
          content="Página para cadastrar um novo imóvel na plataforma da Kairós Imobiliária."
        />
      </Helmet>

      <ImovelForm onSubmit={handleCreate} />
    </>
  );
}
