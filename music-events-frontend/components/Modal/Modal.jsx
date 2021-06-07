import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import * as S from "./Modal.styles";

const Modal = ({ showModal, onClick, children, title }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  const modalContent = showModal ? (
    <S.ModalOverlay>
      <S.ModalBody>
        <S.ModalHeader>
          <a href="#" onClick={handleClick}>
            <FaTimes />
          </a>
        </S.ModalHeader>
        <S.ModalContent>
          {title && <div>{title}</div>}
          {children}
        </S.ModalContent>
      </S.ModalBody>
    </S.ModalOverlay>
  ) : null;

  if (isClient) {
    return createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
};

export default Modal;
