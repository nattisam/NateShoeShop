import React from 'react';
import { useState, useEffect } from 'react';
import './TopHomePage.scss';
import NavBar from '../../Static Components/NavBar/NavBar';
import shoeRight2 from '../../../images/shoeRight2.png';
import shoeLeft from '../../../images/shoeLeft.png';
import DraggableImage from '../../Static Components/DraggableImage';
import { Waves } from '../../Static Components/Waves/Waves';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TopHomePage = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [contactBoxVisible, setContactBoxVisible] = useState(false);

  const handleContactBox = () => {
    setContactBoxVisible(true)
  }

  const handleClose = () => {
    setContactBoxVisible(false);
  }

  const handleSend = () => {
    setContactBoxVisible(false);
    alert("Email sent successfully!");
  }

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header">
      <NavBar />
      {contactBoxVisible && 
            <div>
                {contactBoxVisible && 
                <div className='contact-box'>
                    <div className='inner-contact-box'>
                        <div className='close-area'>
                            <button onClick={handleClose}>
                                <FontAwesomeIcon className='close-icon' icon={faClose} />
                            </button>
                        </div>
                        <h3>Contact Us</h3>
                        <form className='contact-inputs'>
                            <span><label>Name:</label><input type='text' placeholder='Full Name' required/></span>
                            <span><label>Email:</label><input type='email' placeholder='Email'/></span>
                            <span><label>Phone:</label><input type='tel' placeholder='Phone number'/></span>
                            <span><label>Message:</label><textarea rows={4} placeholder='Write us a message..' /></span>
                            <div className='send-btn primary-btn secondary-btn'>
                              <button type='submit' onClick={() => handleSend()}>Send</button>
                            </div>  
                        </form>

                    </div>
                </div>
                }
            </div>
      }
      <div className='outer-header'>
        <div className='middle-content'>
          <div className='middle-content-text'>
            <h3>
              Shoe shopping like
            </h3>
            <h3 style={{ color: "red" }}>
              never before!
            </h3>
            <p>
              Find and purchase your favorite shoes from the comfort of your home.
            </p>
          </div>
          <div className='shopnow-contact'>
            <div className="primary-btn secondary-btn">
              <Link to="/brands" className='shop-now-link'><button>Shop Now</button></Link>
            </div>
            <div className="primary-btn">
              <button onClick={handleContactBox}>Contact Us</button>
            </div>
          </div>
        </div>
        <div className="inner-header">
          <div className="shoe-left">
          <DraggableImage shoe={shoeLeft} width={screenWidth < 960 ? '140px' : '200px'}/>
          </div>
          <div className="shoe-right">
          <DraggableImage shoe={shoeRight2} width={screenWidth < 960 ? '145px' : '220px'} />
          </div>
        </div>
      </div>
      <Waves />
    </div>
  );
};

export default TopHomePage;