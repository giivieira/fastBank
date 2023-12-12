import React from 'react'
import Logo from '../../assets/logoComNome.png'
import './style.css'
import { useNavigate } from "react-router-dom"
import { FaSignInAlt } from "react-icons/fa";
import Button from '../Button/index'


function Header() {

    const navigate = useNavigate();

    return (
        <div className='containerHome'>
            <div className="logoHome">
                <img src={Logo} alt='Logo' onClick={()=> navigate('/')}/>
            </div>
            <div class="topics">
                <div class="topic-container"><a href="/"><p>Data Privacy</p></a></div>
                <div class="topic-container"><a href="/"><p>Trips</p></a></div>
                <div class="topic-container"><a href="/"><p>Credit Card</p></a></div>
                <div class="topic-container"><a href="/"><p>About Us</p></a></div>
            </div>

            <Button title={'SIGN IN'} onClick={(navigate) => navigate('/login')}>
                <FaSignInAlt size={24} color='#C5BFBF'/>
            </Button>
                
        </div>
    )
}

export default Header
