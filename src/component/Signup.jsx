import React, { useState } from 'react';
import './Signup.css';
import { FcGoogle } from 'react-icons/fc';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleSignupWithGoogle = () => {
    // Handle signup with Google logic here
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Sign Up</button>
        <div className="signup-with-google">
          <button onClick={handleSignupWithGoogle}>
          <FcGoogle className='google-icon' />
          <br />
             Signup with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
