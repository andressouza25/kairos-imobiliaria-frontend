import { Button } from "./styles/FooterStyles";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return <Button onClick={handleLogin}>Plataforma Administrativa</Button>;
}
