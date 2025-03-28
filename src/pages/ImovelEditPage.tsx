import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImovelForm from "../components/ImovelForm";
import { Imovel, ImovelFormType } from "../data/ImovelData";

const API_URL = import.meta.env.VITE_API_URL;

export default function ImovelEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<ImovelFormType | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const response = await fetch(`${API_URL}/api/imoveis/${id}`);
      const data: Imovel = await response.json();

      // Converte os dados recebidos (números) para strings, como esperado pelo formulário
      setInitialData({
        ...data,
        price: String(data.price),
        bedrooms: String(data.bedrooms),
        suites: String(data.suites),
        bathrooms: String(data.bathrooms),
        garage: String(data.garage),
        area: String(data.area),
        destaque: Boolean(data.destaque),
      });
    };

    fetchProperty();
  }, [id]);

  const handleUpdate = async (data: ImovelFormType) => {
    const token = localStorage.getItem("token");

    // Converte os campos numéricos de volta para number antes de enviar
    const payload: Imovel = {
      ...data,
      price: Number(data.price),
      bedrooms: Number(data.bedrooms),
      suites: Number(data.suites),
      bathrooms: Number(data.bathrooms),
      garage: Number(data.garage),
      area: Number(data.area),
    };

    await fetch(`${API_URL}/api/imoveis/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    navigate("/admin");
  };

  if (!initialData) return <p>Carregando...</p>;

  return (
    <ImovelForm
      initialData={initialData}
      onSubmit={handleUpdate}
      isEditMode={true}
    />
  );
}
