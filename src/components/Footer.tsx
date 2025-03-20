import {
  FooterContainer,
  FooterText,
  Icon,
  CopyrightText,
  FooterContent,
  InfoGroup,
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
      <FooterContent>
        {/* Grupo 1: Rua e E-mail */}
        <InfoGroup>
          <p>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>{" "}
            {contacts.address}
          </p>
          <p>
            <Icon>
              <FaEnvelope />
            </Icon>{" "}
            {contacts.email}
          </p>
          <p>
            <Icon>
              <FaWhatsapp />
            </Icon>{" "}
            {contacts.whatsapp}
          </p>
          <p>
            <Icon>
              <FaPhone />
            </Icon>{" "}
            {contacts.phone}
          </p>
        </InfoGroup>

        {/* Grupo 3: CRECI e CNPJ */}
        <InfoGroup>
          <FooterText>
            <strong>CRECI:</strong> {contacts.creci}
          </FooterText>
          <FooterText>
            <strong>CNPJ:</strong> {contacts.cnpj}
          </FooterText>
        </InfoGroup>
      </FooterContent>

      {/* Copyright centralizado abaixo */}
      <CopyrightText>
        &copy; 2025 Kairós Imobiliária. Todos os direitos reservados.
      </CopyrightText>
    </FooterContainer>
  );
}
