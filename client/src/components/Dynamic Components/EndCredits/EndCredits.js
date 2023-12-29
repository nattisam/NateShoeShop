import React from 'react';
import './EndCredits.scss';
import { Waves } from '../../Static Components/Waves/Waves';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const EndCredits = (props) => {
  return (
    <div className="header" style={{ backgroundColor: props.bgColor }}>
      <div className='waves-upside-down'>
          <Waves />
      </div>
      <div className='credits-outer-header'>
        <div className='credits-container'>
            <div>
              <h3>My Account</h3>
              <ul>
                <li>Sign Up</li>
                <li>Login</li>
                <li>My Cart</li>
                <li>My Wishlist</li>
              </ul>
            </div>
            <div>
              <h3>Customer Service</h3>
              <ul>
                <li>FAQ's</li>
                <li>Shipping and Delivery</li>
                <li>Return Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div>
              <h3>Top Brands</h3>
              <ul>
                <li>Nike</li>
                <li>Balenciaga</li>
                <li>Vans</li>
                <li>Puma</li>
                <li>Gucci</li>
                <li>Clarks</li>
              </ul>
            </div>
        </div>
      </div>
      <div className='my-credits'>
        <div>
          <h4>Credits: Nathan Samson</h4>
        </div>
        <div className='socials'> 
          <ul>
            <li><a href='https://github.com/nattisam' target='_blank'><FontAwesomeIcon icon={faGithub} style={{ fontSize: "24px", color: "white" }}/></a></li>
            <li><a href='https://www.linkedin.com/in/nathan-estifanos-1566a0288/' target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "24px", color: "white" }}/></a></li>
            <li><a href='https://instagram.com/nattisam' target='_blank'><FontAwesomeIcon icon={faInstagram} style={{ fontSize: "24px", color: "white" }}/></a></li>
            <li><a href='https://twitter.com/Nattisam1' target='_blank'><FontAwesomeIcon icon={faTwitter} style={{ fontSize: "24px", color: "white" }}/></a></li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EndCredits;