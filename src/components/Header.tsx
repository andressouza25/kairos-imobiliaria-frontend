import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Navbar,
  NavLinks,
  NavItem,
  StyledLink,
  MenuButton,
} from "./styles/HeaderStyles";
import { useAuth } from "../contexts/AuthContext";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logoBranco.png";

export default function Header() {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Navbar>
      <Link to="/">
        <img src={logo} alt="Logo da Kairós" width={200} />
      </Link>

      <MenuButton onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </MenuButton>

      <NavLinks isOpen={isMenuOpen}>
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
