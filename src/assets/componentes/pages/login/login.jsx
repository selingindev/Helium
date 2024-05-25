import React, { useState } from 'react';
import './login.css';


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
    <div className="bg-slate-400 h-[100vh] flex flex-col justify-center items-center">
      {!loggedIn ? (
  
          <form className='bg-white w-[50%] h-[50%] flex flex-col justify-center items-center'>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              className='w-[80%] h-16 shadow-2xl hover:scale-110 duration-500 transition ease-in-out rounded-xl pl-2'
            />
            <div className='py-5'></div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-[80%] h-16 shadow-2xl hover:scale-110 duration-500 transition ease-in-out rounded-xl pl-2'
            />
            <button type="button" onClick={handleLogin} className='bg-slate-400 text-2xl py-4 px-40 rounded-2xl mt-10 text-white hover:bg-slate-700 hover:scale-110 duration-500 transition ease-in-out '>
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
