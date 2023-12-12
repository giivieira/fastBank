import React from 'react'
import fundo from '../../assets/fundo.png'
import './style.css'

function Fundo() {
  return (
    <div>
      <img className='fundo' src={fundo} />
    </div>
  )
}

export default Fundo