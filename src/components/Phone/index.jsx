import React from 'react'
import './style.css'
import foto from '../../assets/telefone.png'

function Phone() {
    return (
        <div>
            <div className='containerMobile'>
                <img className='mobile' src={foto} alt="Mobile" />
                <h1> Transform your financial life with the power of Ease technology.</h1>
            </div>
           
        </div>



    )
}

export default Phone
