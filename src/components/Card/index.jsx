import React from 'react'
import './style.css'

function Card({ title, imageUrl, body }) {
  return (
    <div className='cardContainer'>
      <div className="imageContainer">
        <img src={imageUrl} alt='Card' />
      </div>
      <div className="cardContent">
        <div className='cardTitle'>
          <h3>{title}</h3>
        </div>
        <div className="cardBody">
          <p>{body}</p>
        </div>
      </div>

    </div>
  )
}

export default Card

// Cards de viagem, seguro, etc