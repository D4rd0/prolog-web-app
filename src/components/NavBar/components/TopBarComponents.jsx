import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TopBar.css';
import logo from '../../../assets/prolog_logo.svg';
import React, { useState } from 'react';

export const TopBarComponents = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
      alert('Login successful!');
      setLoggedIn(true);
    } else {
      alert('Invalid username or password!');
    }
  };


  return (
    <div className="top-nav">
      <h2 className="logoImage">
          <NavLink to="/introduccion" style={{ paddingBottom: '0.313rem' }}>
            <img src={logo} alt="Logo Icon" />
          </NavLink>
      </h2>
      {loggedIn ? (
        <div className="user-info">
          <p class="welcome">{username}</p>
          <button class="logout" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div class="buttons-container">
          <input class="usuario" type="username" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input class="contraseña" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button class="login-button" onClick={handleLogin}>Iniciar Sesión</button>
          <NavLink to="/register">
            <button class="register-button">Registrarse</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TopBarComponents;
