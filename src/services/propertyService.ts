export const API_URL = "http://localhost:5000/api"; // Altere se necessário

// Fetch all properties
export const getAllProperties = async () => {
  try {
    const response = await fetch(`${API_URL}/imoveis`);
    if (!response.ok) {
      throw new Error("Failed to fetch properties");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};

// Fetch a property by ID
export const getPropertyById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/imoveis/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch property details");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching property details:", error);
    return null;
  }
};
