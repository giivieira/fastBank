import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import './style.css'
import { useAuthStore } from '../../stores/authStores/index'
import axios from 'axios'

function ContainerLogin() {

  const navigate = useNavigate();

  const setAccessToken = useAuthStore(state => state.setAccessToken);
    const setRefreshToken = useAuthStore(state => state.setRefreshToken);

    const cpf = useState('');
    const password = useState('');


    async function teste(e) {
        e.preventDefault();
        console.log(e)
        await axios.post('http://localhost:8000/api/token/', {
            "cpf": e.target.cpf.value,
            "password": e.target.password.value
        })
        .then((response) => {
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;
            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
        })
        .then(() => {
            navigate('/account', { replace: true })
        })
        .catch((e) => {
            console.log(cpf, password)
            console.log(e);
        })
    }

  return (
    <form className='containerLogin' onSubmit={teste}>
     
      <section className="conteudo">

        <div className="inputs">
          <h1 className='titleLogin'>Welcome!</h1>
          <h2 className='subtitleLogin'>CPF</h2>
          <input type="number" name='cpf'/>
          <h2 className='subtitleLogin'>Password</h2>
          <input type="password" name='password'/>
          <div className='btnLogin'>
            <button className='login' type="submit" >
              <p>Login</p>
            </button>
            <button className='register' type="submit">
              <p>Register</p>
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default ContainerLogin