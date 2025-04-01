import {
  Container,
  Content,
  TextSection,
  ImageSection,
  InstagramButton,
} from "../styles/SobreStyles";
import ownersPhoto from "../assets/Kairos Donos.jpg";
import { FaInstagram } from "react-icons/fa6";
import ExitIntentModal from "../components/ExitIntentModal"; // 🔥 Importa o modal

export default function Sobre() {
  const instagramUrl = "https://www.instagram.com/kairosimobiliariarp/";

  return (
    <Container>
      <ExitIntentModal /> {/* Adiciona aqui no topo da renderização */}
      <Content>
        <TextSection>
          <h1>Sobre Nós</h1>
          <p>
            A Kairós Imobiliária nasceu do sonho de oferecer um serviço
            imobiliário diferenciado, focado na confiança, transparência e
            excelência. Com anos de experiência no mercado, ajudamos centenas de
            clientes a encontrar o imóvel ideal.
          </p>
          <p>
            Nossa missão é transformar o processo de compra e venda de imóveis
            em uma experiência segura e satisfatória, sempre colocando nossos
            clientes em primeiro lugar.
          </p>
          <InstagramButton
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Acesse nosso Instagram
          </InstagramButton>
        </TextSection>

        <ImageSection>
          <img src={ownersPhoto} alt="Fundadores da Kairós Imobiliária" />
        </ImageSection>
      </Content>
    </Container>
  );
}
