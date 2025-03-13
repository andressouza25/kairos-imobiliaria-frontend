import { contacts } from "../data/contacts";
import {
  ContactContainer,
  ContactInfo,
  ContactForm,
  Input,
  TextArea,
  SubmitButton,
} from "../components/styles/ContatoStyles";

export default function Contato() {
  return (
    <ContactContainer>
      <h1>Entre em Contato</h1>

      <ContactInfo>
        <p>📍 {contacts.address}</p>
        <p>📞 {contacts.phone}</p>
        <p>💬 {contacts.whatsapp}</p>
        <p>📧 {contacts.email}</p>
      </ContactInfo>

      <ContactForm>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="E-mail" />
        <TextArea placeholder="Mensagem"></TextArea>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
}
