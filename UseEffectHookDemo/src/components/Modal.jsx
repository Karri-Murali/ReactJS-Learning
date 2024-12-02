import {  useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open , children , onClose }) {
  
  useEffect(() => {
    if(open){
      dialog.current.showModal();
    }
    else{
      dialog.current.close();
    }
  },[open]);

  const dialog = useRef();
  
 

  return createPortal(
    <dialog className="modal" onClose={onClose} ref={dialog}>
      {open && children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
