import React from "react";
import { ModalContainer, Overlay } from "./styles";

interface ModalProps {
  title: string,
  children: React.ReactNode,
  handleClose: ()  => void,
  style?: React.CSSProperties
}

function Modal({ title, children, handleClose, ...rest }: ModalProps) {
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
