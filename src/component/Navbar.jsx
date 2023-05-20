import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FcMenu } from "react-icons/fc";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          My Hostels
        </Link>
      </div>
      <FcMenu className="navbar-toggle" onClick={toggleMenu}>
        <span className={`navbar-toggle-icon ${isOpen ? 'open' : ''}`}></span>
      </FcMenu>
      <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/find-a-hostel" className="nav-link">
            Find a Hostel
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/list-your-property" className="nav-link">
            List Your Property
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="user-icon">
        <FaUserCircle className="user-icon" />
        <div className="user-dropdown">
          <Link to="/login" className="dropdown-link">
            Login
          </Link>
          <Link to="/signup" className="dropdown-link">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
