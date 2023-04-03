import React, { useState, useEffect } from 'react';
import './Login.css';
import configData from '../config.json';
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(configData.LOGIN.LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, password })
    });
    const data = await response.json();
    if (data.message == "Logged in"){
      localStorage.setItem("authenticate", true)
      navigate("/dashboard");
    }
    else {
      navigate("/login")
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Username</label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="Enter username"
          value={user}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;