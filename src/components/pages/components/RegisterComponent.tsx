import React, { useState } from 'react';

export const RegisterComponent = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registro exitoso!');
  };

  return <div style={{color:'black'}}>
      <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>;
};
