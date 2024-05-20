import React, { useState } from 'react';
import './login.css';

import ContainerEntrar from '../../microsComponentes/containerLoginCdastro/ContainerEntrar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'usuario' && password === 'senha') {
      setLoggedIn(true); // Login bem-sucedido
    } else {
      alert('Login falhou. Verifique seu usuário e senha.');
    }
  };

  return (
    <div>
      {!loggedIn ? (
  
          <form className='loginForm'>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>

      ) : (
        <div>
          <p>Você está logado!</p>
          {/* Aqui você pode redirecionar o usuário para outra página ou renderizar outro componente */}
        </div>
      )}
    </div>
  );
};

export default Login;
