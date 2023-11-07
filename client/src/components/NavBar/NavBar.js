// NavBar.js
import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Nate</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/products" className="nav-link">Products</a>
          </li>
          <li className="nav-item">
            <a href="/cart" className="nav-link">Cart</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;