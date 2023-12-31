import React, { useState, useEffect, useRef } from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import CartDropdown from '../Dropdown/CartDropdown';
import WishlistDropdown from '../Dropdown/WishlistDropdown';
import logoNate from '../../../images/logoNate.png';

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [wishlistVisible, setWishlistVisible] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState('transparent');

  const cartDropdownRef = useRef(null);
  const menuDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setCartVisible(false);
    setWishlistVisible(false);
  }

  const handleCart = () => {
    setCartVisible(!cartVisible);
    setDropdownVisible(false);
    setWishlistVisible(false);
  };

  const handleWishlist = () => {
    setWishlistVisible(!wishlistVisible);
    setDropdownVisible(false);
    setCartVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const scrollPercentage = (scrollY / windowHeight) * 100;

      if (scrollPercentage > 20) {
        setBackgroundColor('black');
      } else {
        setBackgroundColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
      
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
        setCartVisible(false);
        setWishlistVisible(false);
      }

    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav>
      {isScrollingUp && 
        <div className="navbar" style={{ position: 'fixed', backgroundColor: backgroundColor }}>
            <div className="navbar-container">
              <div className='nav-segment left-segment' ref={menuDropdownRef}>
                  <button className='dropdown-button' onClick={toggleDropdown} style={{ color: dropdownVisible && "gray"}}>&#9776;</button>
                  { dropdownVisible && (
                  <div className='hidden-nav-items'>
                        <Link to="/" className='drop-nav-link' >Home</Link>
                        <Link to="/men" className='drop-nav-link' >Men</Link>
                        <Link to='/women' className='drop-nav-link' >Women</Link>
                        <Link to='/kids' className='drop-nav-link' >Kids</Link>
                        <Link to='/brands' className='drop-nav-link' >Brands</Link>
                  </div>
                  )}
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
                <Link to="/" className="navbar-logo">
                  <img src={logoNate} alt="Nate Shoe Logo" />
                </Link>
              </div>
              <div className='nav-segment right-segment' ref={cartDropdownRef}>
                <ul className="nav-menu">
                  <li className="nav-item cart-nav-item">
                    <button onClick={handleWishlist} className='nav-link cart-nav-link' >
                        <FontAwesomeIcon icon={faHeart} color={wishlistVisible && "gray"} />
                    </button>
                    {wishlistVisible && <WishlistDropdown />}
                  </li>
                  <li className="nav-item cart-nav-item">
                    <button onClick={handleCart} className='nav-link cart-nav-link' >
                      <FontAwesomeIcon icon={faShoppingCart} color={cartVisible && "gray"} />
                    </button>
                    {cartVisible && <CartDropdown />}
                  </li>
                  <div className='vertical-line' />
                  <li className='nav-item user-account'>
                    <Link to="" className='nav-link' >Sign Up</Link>
                  </li>
                  <li className='nav-item user-account'>
                    <Link to="" className='nav-link' >Login</Link>
                  </li>
                </ul>
              </div>
            </div>
      </div>
    }
  </nav>
  );
};

export default Navbar;
