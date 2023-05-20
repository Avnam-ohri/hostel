import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../server/firebase';
import './Login.css';

const Login = ({ openDialog }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('Logged in successfully');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  const openLoginDialog = () => {
    openDialog();
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            id="email-address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div>
          <button onClick={onLogin}>Login</button>
        </div>
        <p>
          No account yet?{' '}
          <button className="login-link" onClick={openLoginDialog}>
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
