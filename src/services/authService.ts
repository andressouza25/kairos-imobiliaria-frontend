const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Verifica se a resposta foi bem-sucedida (status 200)
    if (!response.ok) {
      const data = await response.json();
      return { success: false, message: data.message || "Erro no login" };
    }

    // Caso a resposta seja ok (status 200)
    const data = await response.json();
    localStorage.setItem("token", data.token);
    return { success: true, token: data.token };
  } catch (error) {
    console.error("Erro ao conectar com o servidor:", error);
    return { success: false, message: "Erro ao conectar com o servidor." };
  }
};

// Função auxiliar para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// Função auxiliar para logout
export const logout = () => {
  localStorage.removeItem("token");
};
