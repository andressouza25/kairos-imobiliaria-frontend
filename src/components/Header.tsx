import { Link } from "react-router-dom";
import { Navbar, NavLinks, NavItem, StyledLink } from "./styles/HeaderStyles";
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/logoBranco.png";

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <Navbar>
      <Link to="/">
        <img src={logo} alt="Logo da Kairós" width={200} />
      </Link>
      <NavLinks>
        <NavItem>
          <StyledLink to="/sobre">Sobre</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/imoveis">Imóveis</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contato">Contato</StyledLink>
        </NavItem>
        {isAuthenticated && (
          <NavItem>
            <StyledLink to="/admin">Administrativo</StyledLink>
          </NavItem>
        )}
      </NavLinks>
    </Navbar>
  );
}
