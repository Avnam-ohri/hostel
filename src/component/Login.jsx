import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleLoginWithGoogle = () => {
    // Handle login with Google
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label className='email-label' htmlFor="email">Email</label>
          <input className='email-input' type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label className='pass-label' htmlFor="password">Password</label>
          <input className='pass-input'type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={handleLoginWithGoogle}>Login with Google
        <br />
        <FcGoogle className='google-icon' />
        </button>
      </form>
    </div>
  );
};

export default Login;
