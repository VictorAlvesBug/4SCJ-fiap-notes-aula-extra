import React from "react";
import { ModalContainer, Overlay } from "./styles";

interface ModalProps {
  titleNewNote: string,
  titleEditNote: string,
  isEditingNote: Boolean,
  children: React.ReactNode,
  handleClose: ()  => void,
  style?: React.CSSProperties
}

function Modal({ titleNewNote, titleEditNote, isEditingNote, children, handleClose, ...rest }: ModalProps) {
  const title = isEditingNote ? titleEditNote : titleNewNote;
  
  // Renderiza modal com título, elementos-filhos, evento de fechar e passa os
  // demais parâmetros para o ModalContainer.
  return (
    <Overlay>
      <ModalContainer {...rest}>
        <header>{title}</header>
        <span onClick={handleClose}>&times;</span>
        {children}
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
