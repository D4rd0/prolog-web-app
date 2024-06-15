import { NavLink } from 'react-router-dom';
import './TopBar.css';
import logo from '../../../assets/prolog_logo.svg';
import React, { useState } from 'react';

export const TopBarComponents = ({ setLoggedInCallback, loggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const storedUsers = localStorage.getItem('users');
    const usersData = storedUsers ? JSON.parse(storedUsers) : {};
    
    if (usersData[username] && usersData[username] === password) {
      setLoggedInCallback(true);
    } else {
      alert('Usuario o contraseña incorrecto');
    }
  };

  const handleLogout = () => {
    setLoggedInCallback(false);
    window.location.reload();
    window.location.href = '/';
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
          <p className="welcome">{username}</p>
          <button className="logout" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div className="buttons-container">
          <input
            className="usuario"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="contraseña"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>Iniciar Sesión</button>
          <NavLink to="/register">
            <button className="register-button">Registrarse</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TopBarComponents;
