import './style.css'
import React from 'react'
import Cartao from '../../assets/cartao.png'
import { useNavigate } from "react-router-dom"


function Presentation() {

    const navigate = useNavigate();


    return (
        <>
            <div className='all'>
                <div className="frase">
                    <h1>DIGITAL BANK MADE FOR DIGITAL USERS</h1>
                    <img id='cartao' src={Cartao} ></img>
                </div>
                
            </div>
            <button className='btn' onClick={()=> navigate('/register')}>
                Order yours
            </button>
                

        </>
        
    )
}

export default Presentation