import {
  Button,
  ModalButtons,
  ModalContainer,
  ModalOverlay,
  ModalTitle,
} from "./styles/ConfirmModal";

interface ConfirmModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  message,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>{message}</ModalTitle>
        <ModalButtons>
          <Button className="cancel" onClick={onCancel}>
            Cancelar
          </Button>
          <Button className="confirm" onClick={onConfirm}>
            Confirmar
          </Button>
        </ModalButtons>
      </ModalContainer>
    </ModalOverlay>
  );
}
