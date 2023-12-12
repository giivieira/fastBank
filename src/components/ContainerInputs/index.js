import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { api } from '../../services/api'
import '../ImageRegis/style.css'
import Modal from 'react-modal';


function ContainerInputs() {

  const navigate = useNavigate();

  async function register(e) {
    const formData = new FormData();
    formData.append('email', e.target.email.value);
    formData.append('password', e.target.password.value);
    formData.append('dataNasc', e.target.dataNasc.value);
    formData.append('first_name', e.target.first_name.value);
    formData.append('telefone', e.target.telefone.value);
    formData.append('last_name', e.target.last_name.value);
    formData.append('cpf', e.target.cpf.value);

    if (imagem) {
      formData.append('url_imagem', imagem);
    }

    try {
      const response = await api.post('api/user/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Criou');
    } catch (error) {
      console.error(error);
      alert('Não criou');
    }
  }


  const [imagem, setImagem] = useState('');
  const [imagemPreview, setImagemPreview] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImagemChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImagem(file);
      setImagemPreview(URL.createObjectURL(file));
      openModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    register(e);
    console.log("Sim")
  }

  return (
    <form className='allInputs' onSubmit={handleRegister}>
      <h1>Create Accout</h1>
      <div className='middle'>
        <div className='nomes'>
          <div className='name'>
            <h2>First name</h2>
            <input type='text' name='first_name'required />
          </div>
          <div className='name'>
            <h2>Last name</h2>
            <input type='text' name='last_name'required />
          </div>
        </div>

        <h2>CPF</h2>
        <input type='text' name='cpf'required />
        <h2>Email</h2>
        <input type='email' name='email'required />
        <div className='nomes'>
          <div className='name'>
            <h2>Birth Date</h2>
            <input type='date' name='dataNasc' required />
          </div>
          <div className='name'>
            <h2>Phone</h2>
            <input type='tel' name='telefone'required />
          </div>
        </div>
        <h2>Password</h2>
        <input type='password' name='password'required />
        <h2>Profile Image</h2>
        <input type="file" name='imag' accept="image/png,jpg,jpeg" onChange={handleImagemChange} />
        <div className='buttons'>
          <button className='btnRegis' type="submit">Register</button>
          <button className='btnSign' onClick={() => navigate('/login')}>Sign In</button>
        </div>

      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview Modal"
        style={{
          content: {
            borderRadius: 20,
            width: '25%', 
            height: '40%', 
            margin: 'auto', 
          }
        }}
      >
        <h2 style={{ margin: 'auto' }}>Your image</h2>
        {imagemPreview ? (
          <img
            src={imagemPreview}
            alt="Imagem do usuário"
            style={{
              borderRadius: '50%',
              margin: 'auto',
              width: '58%',
              height: '70%', 
              display: 'block', 
            }}
          />
        ) : (
          <span>No image </span>
        )}
        <button
          style={{
            width: '14%',
            margin: 'auto',
            marginTop:'10px',
            display: 'block', 
          }}
          onClick={closeModal}
        >
          OK
        </button>
      </Modal>


    </form>
  )
}

export default ContainerInputs;
