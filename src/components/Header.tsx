import { Link } from "react-router-dom";
import { Navbar, NavLinks, NavItem, StyledLink } from "./styles/HeaderStyles";
import logo from "../assets/logoBranco.png";

export default function Header() {
  return (
    <Navbar>
      <Link to="/">
        <img src={logo} alt="Logo" width={200} />
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
      </NavLinks>
    </Navbar>
  );
}
