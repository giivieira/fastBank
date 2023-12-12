import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { useNavigate } from "react-router-dom"

import './style.css'

function Button({title, onClick }) {

  const navigate = useNavigate();

  const handleClick = () => {
    
    if (onClick) {
      onClick(navigate);
    } 
  };

  return (
    <div>
      <button onClick={handleClick}>
        <IconContext.Provider value={{ color: '#fff', size: '24px' }}>
          <FaSignInAlt />
        </IconContext.Provider>
        {title}
      </button>
    </div>
  )
}

export default Button


//Configuração do botão de SIGN IN