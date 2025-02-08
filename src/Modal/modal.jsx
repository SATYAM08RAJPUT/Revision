// import './modal.css';
// import { IoClose } from "react-icons/io5";

// export default function ModalJi({ isOpen, onClose, children }) {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <div className='modal-close-btn-div'>
//             <button onClick={onClose} className="modal-close">cancel</button>
//         </div>
//         <div className='modal-children'>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

import './modal.css';
import { IoClose } from 'react-icons/io5';

export default function ModalJi({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <div className="modal-content-inner-div">
          <div className="modal-close-btn-div">
            <button onClick={onClose} className="modal-close">
              cancel
            </button>
          </div>
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className="modal-Content-Children-div"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
