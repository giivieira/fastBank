import React from 'react'
import ContainerLogin from '../components/ContainerLogin'
import Header from '../components/Header'
import { useState } from 'react'

function Login() {
  const cpf = useState("")
  const senha = useState("")

  async function handleLogin() {
    
  }
  return (
    <>
      <Header />
      <ContainerLogin />
    </>
  )
}

export default Login