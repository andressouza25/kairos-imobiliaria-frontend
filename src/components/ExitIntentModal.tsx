import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { useNavigate } from "react-router-dom";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h2`
  margin-bottom: 12px;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  background: ${theme.colors.primary};
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: ${theme.colors.darkPrimary};
  }
`;

const CancelButton = styled(Button)`
  background: #ccc;
  color: #333;

  &:hover {
    background: #aaa;
  }
`;

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasShown = localStorage.getItem("modalShown");

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        localStorage.setItem("modalShown", "true");
      }

      // ✅ Se quiser exibir o modal TODAS as vezes que o mouse sair da tela:
      // ❗️Descomente a linha abaixo e comente a verificação do localStorage acima
      // if (e.clientY <= 0) setShow(true);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!show) return null;

  return (
    <Overlay>
      <ModalBox>
        <Title>Encontrou o que procurava?</Title>
        <Text>
          Se precisar de ajuda, nossos consultores estão prontos para te
          atender. Deseja conversar com alguém antes de sair?
        </Text>
        <ButtonGroup>
          <Button onClick={() => navigate("/contato")}>
            Falar com um consultor
          </Button>
          <CancelButton onClick={() => setShow(false)}>Agora não</CancelButton>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
}
