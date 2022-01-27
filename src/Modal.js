import React, { useState } from "react";
import './Modal.css';
import Select from './Select';

function Modal() {
   const [open, setOpen] = useState(false)
  

   const openModal = () => {
    setOpen(true);
   }

    const  handleClose = (e) => {
      const currentClass = e.target.className;
      if (currentClass === 'modal-card' || currentClass === 'modal-select') {
        return;
     }
     setOpen(false);
    }
 
    return (
      <>
    <div hidden={!open}  >
        <div className="modal-background" onClick={handleClose}>
          <div className="modal-card">
            {<Select/>}        
          </div>
        </div>
      </div>
      <button className="btnModal" onClick={setOpen}> Нажми! </button>
      </>
    );
  }
  
  export default Modal;