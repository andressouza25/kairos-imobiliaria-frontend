import { FaWhatsapp } from "react-icons/fa";
import { contacts } from "../data/contacts";
import { FloatingWhatsAppButton } from "./styles/WhatsAppButtom";

export default function WhatsAppButton() {
  return (
    <FloatingWhatsAppButton
      href={`https://wa.me/55${contacts.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      title="Fale conosco no WhatsApp"
    >
      <FaWhatsapp />
    </FloatingWhatsAppButton>
  );
}
