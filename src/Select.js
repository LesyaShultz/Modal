import React, { useState } from "react";
import './Select.css';

function Select() {
   
   const [value, setValue] = useState('');

    function chengeSelect(e) {
      setValue(e.target.value);
   }
    

    return (
      <>
            <select className="modal-select" value={value} onChange={chengeSelect}>
              <option >Юпитер</option>
              <option >Венера</option>
              <option >Земля</option>
              <option >Марс</option>
              <option >Меркурий</option>
              <option >Нептун</option>
              </select>  
              <div className="result">
                 Выбрана опция: {value}
               </div>        
      </>
    );
  }
  
  export default Select;