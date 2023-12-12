import React, {useState} from 'react'
import '../components/Styles/accountuser.css';
import Header from '../components/Header';
import { useAuthStore } from '../stores/authStores';
import axios from 'axios'

import ImageAccount from '../assets/accountuser.svg';

function AccountUser() {

    const [saldo, setSaldo] = useState("")
    const [agencia, setAgencia] = useState("")
    const [conta, setConta] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    
    const accessToken = useAuthStore(state => state.accessToken);


    async function name(e){
        const response = await axios.get('http://localhost:8000/api/token', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }  
          })
          .then((response) => {
              console.log(response.data)
              const firstname = response.data.first_name
              const lastname = response.data.last_name
              setFirstname(firstname)
              setLastname(lastname)
              
          })
    }


    async function contaInformation(e) {
        
        console.log(e)
        const response = await axios.get('http://localhost:8000/api/contas', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }  
        })
        .then((response) => {
            console.log(response.data)
            const saldo = response.data[0].saldo
            const agencia = response.data[0].agencia
            const conta = response.data[0].numero
            setSaldo(saldo)
            setAgencia(agencia)
            setConta(conta)
            console.log(saldo)
        })
    }

    async function handleInformations(e){
        e.preventDefault();
        name()
        contaInformation()
    }

    
    return (
        <>
            <Header />
            <form className='containerAccount' onLoad={handleInformations}>
                <div className="informations">
                    <h1>Hello {firstname} {lastname}!</h1>
                    <div className="details">
                        <h2>Agency <span>{agencia}</span></h2>
                        <h2>Account <span>{conta}</span></h2>
                    </div>
                    <h2>Balance <span className='saldo'> R${saldo}</span></h2>

                </div>
                <div className="mais-inform">
                    <h3>For more download the app</h3>
                    <img src={ImageAccount} alt='Logo' />
                </div>




            </form>
        </>

    )
}

export default AccountUser
