import axios from "axios";

export const uploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "kairos_upload");

  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/dbyrep7ov/image/upload",
    formData
  );

  return response.data.secure_url; // URL da imagem
};
