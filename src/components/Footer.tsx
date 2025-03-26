import React from "react";
import { useAuth } from "../contexts/AuthContext"; // Usando o hook para acessar o contexto
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
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

export default function Footer() {
  const { isAuthenticated } = useAuth(); // Usando o contexto para verificar se o usuário está logado

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

          {/* Exibe o botão correto de Login ou Logout com base no estado de autenticação */}
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </InfoGroup>
      </FooterContent>

      {/* Copyright centralizado abaixo */}
      <CopyrightText>
        &copy; 2025 Kairós Imobiliária. Todos os direitos reservados.
      </CopyrightText>
    </FooterContainer>
  );
}
