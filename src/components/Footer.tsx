import {
  FooterContainer,
  FooterText,
  FooterInfo,
  Icon,
} from "./styles/FooterStyles";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { contacts } from "../data/contacts";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        © 2024 Kairós Imobiliária. Todos os direitos reservados.
      </FooterText>

      <FooterInfo>
        <p>
          <Icon>
            <FaMapMarkerAlt />
          </Icon>{" "}
          {contacts.address}
        </p>
        <p>
          <Icon>
            <FaPhone />
          </Icon>{" "}
          Telefone: {contacts.phone}
        </p>
        <p>
          <Icon>
            <FaWhatsapp />
          </Icon>{" "}
          WhatsApp: {contacts.whatsapp}
        </p>
        <p>
          <Icon>
            <FaEnvelope />
          </Icon>{" "}
          E-mail: {contacts.email}
        </p>
      </FooterInfo>
    </FooterContainer>
  );
}
