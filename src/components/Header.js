// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
  <h1>Eugen Lau</h1>
  <nav className="nav-buttons">
    <Link to="/">
      <button className="nav-button">Home</button>
    </Link>
    <Link to="/pricing">
      <button className="nav-button">Pricing</button>
    </Link>
    <Link to="/portfolio">
      <button className="nav-button">Portfolio</button>
    </Link>
    {/* <Link to="/contact">
      <button className="nav-button">Contact</button>
    </Link> */}
  </nav>
</header>
);

export default Header;
