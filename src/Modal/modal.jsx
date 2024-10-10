import './modal.css';
import { IoClose } from "react-icons/io5";

export default function ModalJi({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='modal-close-btn-div'>
          <button onClick={onClose} className="modal-close"><IoClose className='modal-cross-icon'/></button>
        </div>
        {children}
      </div>
    </div> 
  );
}
