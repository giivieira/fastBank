import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa';
import './style.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Bank</h4>
            <a href='/'>
              <p>Credit Card</p>
            </a>
            <a href='/'>
              <p>Trips</p>
            </a>
            <a href='/'>
              <p>About us</p>
            </a>
          </div>
          {/* <div className="sb__footer-links_div">
            <h4>Social Media</h4>
            <div className="socialmedia">
              <p><a href='https://www.instagram.com/gii.vieiraz/'><FaInstagram size={28}/></a></p>
              <p><a href='https://github.com/giivieira'><FaGithub size={28}/></a></p>
            </div>
          </div> */}
        </div>

        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p> {new Date().getFullYear} © 2023 BANCO EASE CNPJ: 01.234.567/8909-09</p>
          </div>
          <div className="sb__footer-below-links">
            <a href='/'><div><p>Terms & Conditions</p></div></a>
            <a href='/'><div><p>Privacy</p></div></a>
            <a href='/'><div><p>Security</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
};