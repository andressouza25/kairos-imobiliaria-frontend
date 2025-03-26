import { useState, useEffect } from "react";

// Hook customizado para monitorar autenticação
export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token); // Atualiza o estado com base no token
    };

    checkAuth(); // Checa a autenticação no primeiro render

    // Adiciona listener para mudanças no localStorage (caso o token mude)
    window.addEventListener("storage", checkAuth);

    return () => {
      // Limpeza do listener quando o componente for desmontado
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return isLoggedIn; // Retorna o estado de autenticação
};
