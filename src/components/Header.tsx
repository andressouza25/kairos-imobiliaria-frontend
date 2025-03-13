import { Navbar, NavLinks, NavItem, StyledLink } from "./styles/HeaderStyles";
import logo from "../assets/logoBranco.png";

export default function Header() {
  return (
    <Navbar>
      <img src={logo} alt="Logo" width={220} />
      <NavLinks>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
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
