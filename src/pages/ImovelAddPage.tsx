import { useNavigate } from "react-router-dom";
import ImovelForm from "../components/ImovelForm";
import { Imovel } from "../data/ImovelData";
import { Helmet } from "react-helmet-async"; // 🧠 Helmet para SEO

const API_URL = import.meta.env.VITE_API_URL;

export default function AddImovel() {
  const navigate = useNavigate();

  const handleCreate = async (data: Imovel) => {
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
