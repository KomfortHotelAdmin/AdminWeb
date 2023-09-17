import { createPortal } from "react-dom";
import { ModalOverlay, ModalWrap } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children }) => {
  return (
    <ModalOverlay>
      <ModalWrap>{children}</ModalWrap>
    </ModalOverlay>
  );
  // return createPortal(
  //   <ModalOverlay>
  //     <ModalWrap>{children}</ModalWrap>
  //   </ModalOverlay>,
  //   modalRoot
  // );
};

export default Modal;
