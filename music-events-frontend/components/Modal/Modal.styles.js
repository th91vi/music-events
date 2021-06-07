import styled from "styled-components";

export const ModalBody = styled.div`
  background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 20px;
  z-index: 100;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

export const ModalContent = styled.div`
  padding-top: 10px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
