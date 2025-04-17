import { useAuth } from "../contexts/AuthContext";
import { Button } from "./styles/FooterStyles";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const { setIsAuthenticated } = useAuth(); // Usando o setter do contexto
  const navigate = useNavigate(); // Usando o hook useNavigate para redirecionamento

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remover o token
    setIsAuthenticated(false); // Atualiza o estado no contexto para false
    navigate("/"); // Redireciona para a página inicial (Home)
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
