import React from 'react';
import { useState, useEffect } from 'react';
import './TopHomePage.scss';
import NavBar from '../../Static Components/NavBar/NavBar';
import shoe7 from '../../../images/shoe7.png';
import shoe1 from '../../../images/shoe1.png';
import SearchBar from '../../Static Components/SearchBar/SearchBar';
import DraggableImage from '../../Static Components/DraggableImage';
import { Waves } from '../../Static Components/Waves/Waves';


const TopHomePage = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update screenWidth when the window is resized
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header">
        <NavBar />
      <div className='outer-header'>

        <div className='middle-content'>
          <div className='middle-content-text'>
            <h3>
              Shoe shopping like
            </h3>
            <h3>
              never before!
            </h3>
            <p>
              Find and purchase your favorite shoes from the comfort of your home.
            </p>
          </div>
          <div className='shopnow-contact'>
            <div className="primary-btn secondary-btn">
              <button>Shop Now</button>
            </div>
            <div className="primary-btn">
              <button >Contact Us</button>
            </div>
          </div>
        </div>
        <div className="inner-header">
          <div className="shoe-left">
          <DraggableImage shoe={shoe1} width={screenWidth < 960 ? '150px' : '250px'} />
          </div>
          <div className="shoe-right">
          <DraggableImage shoe={shoe7} width={screenWidth < 960 ? '150px' : '250px'} />
          </div>
        </div>
      </div>
      <Waves />
    </div>
  );
};

export default TopHomePage;