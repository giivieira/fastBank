import React from 'react'
import ImageRegis from '../components/ImageRegis'
import '../components/ImageRegis/style.css'
import ContainerInputs from '../components/ContainerInputs'
import Header from '../components/Header'

function Register() {
  return (
    <>
      <Header />
      <div className='allRegister' >
        <ImageRegis />
        <ContainerInputs />
      </div>
    </>

  )
}

export default Register