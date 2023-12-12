import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css';
import AccountUser from './pages/AccountUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/account' Component={AccountUser} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


