import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../server/firebase';
import { Link } from 'react-router-dom';
 // assuming you have initialized Firebase auth
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      // You can perform additional operations after signup, like updating user profile, etc.
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignup = () => {
    signInWithGoogle()
    .then((result) => {
      // Handle successful Google signup
      const user = result.user;
      navigate('/dashboard'); // Redirect to the dashboard or any other page after successful signup
    })
    .catch((error) => {
      setError(error.message);
    });

    // Implement the Google signup functionality
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <input
          className="signup-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="signup-input"
          type="text"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="signup-button" type="submit">Signup</button>
      </form>
      <div className="google-signup-container">
        <button className="google-signup-button" onClick={handleGoogleSignup}>
          Signup using Google
        </button>
      </div>
      {error && <p className="signup-error">{error}</p>}
      <p className="signup-login-link">
        Already a user? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
