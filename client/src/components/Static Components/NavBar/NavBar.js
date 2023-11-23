// NavBar.js
import React from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className='nav-segment'>
          <ul className='nav-menu'>
            <li className='nav-item'>
              {/* <a href='/men' className='nav-link' >Men</a> */}
              <Link to="/men" className='nav-link' >Men</Link>
            </li>
            <li className='nav-item'>
              <Link to='/women' className='nav-link' >Women</Link>
            </li>            
            <li className='nav-item'>
              <Link to='/kids' className='nav-link' >Kids</Link>
            </li>
            <li className='nav-item'>
              <Link to='/brands' className='nav-link' >Brands</Link>
            </li>
          </ul>
        </div>
        <div className='nav-middle'>
          <Link to="/" className="navbar-logo">NATE</Link>
        </div>
        <div className='nav-segment'>
          <ul className="nav-menu">
            <li className="nav-item">
              <span className='nav-search'>
                <FontAwesomeIcon icon={faSearch} />
                <input placeholder='Search for Shoe..' />
              </span>
            </li>
            <li className="nav-item">
              <a href="/wishlist" className="nav-link">
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </li>
            <li className="nav-item">
              <a href="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </li>
            <li className="nav-item">
              <div className="vertical-line"></div>
            </li>
            <li className="nav-item">
              <a href="/signup" className="nav-link">Sign Up</a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;