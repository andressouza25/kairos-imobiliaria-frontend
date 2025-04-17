import axios from "axios";

export const uploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "kairos_upload"); // Preset de upload configurado no Cloudinary

  // Enviando o arquivo para o Cloudinary
  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/dbyrep7ov/image/upload",
    formData
  );

  // Verificando a resposta e retornando o URL e public_id
  if (response.data && response.data.secure_url && response.data.public_id) {
    return {
      url: response.data.secure_url, // URL da imagem segura
      public_id: response.data.public_id, // Public ID da imagem
    };
  } else {
    throw new Error("Erro ao fazer upload da imagem no Cloudinary.");
  }
};
