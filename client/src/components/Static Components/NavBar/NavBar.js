import React, { useState, useEffect, useRef } from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import CartDropdown from '../Dropdown/CartDropdown';
import WishlistDropdown from '../Dropdown/WishlistDropdown';

const NavBar = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [wishlistVisible, setWishlistVisible] = useState(false);

  const handleCart = () => {
    setCartVisible(!cartVisible);
    setWishlistVisible(false);
  };

  const handleWishlist = () => {
    setWishlistVisible(!wishlistVisible);
    setCartVisible(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCartVisible(false);
        setWishlistVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className='nav-segment'>
          <ul className='nav-menu'>
          <li className='nav-item'>
              <Link to="/" className='nav-link' >Home</Link>
            </li>
            <li className='nav-item'>
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
        <div className='nav-segment' ref={dropdownRef}>
          <ul className="nav-menu">
          <li className="nav-item cart-nav-item">
              <button onClick={handleWishlist} className='nav-link cart-nav-link' >
                  <FontAwesomeIcon icon={faHeart} />
              </button>
              {wishlistVisible && <WishlistDropdown />}
            </li>
            <li className="nav-item cart-nav-item">
              <button onClick={handleCart} className='nav-link cart-nav-link' >
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
              {cartVisible && <CartDropdown />}
            </li>
            <li className="nav-item">
              <span className='nav-search'>
                <FontAwesomeIcon icon={faSearch} />
                <input placeholder='Search for Shoe..' />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
