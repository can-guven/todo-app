import "./Modal.scss";
import { FC, useRef } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { children, isOpen, onClose } = props;
  const modalRef = useRef(null);

  const handleModalClick = (e: any) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "is-open" : ""}`}
      ref={modalRef}
      onClick={handleModalClick}
    >
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
