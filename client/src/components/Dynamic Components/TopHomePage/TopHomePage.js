import React from 'react';
import './TopHomePage.scss';
import NavBar from '../../Static Components/NavBar/NavBar';
import shoe7 from '../../../images/shoe7.png';
import shoe1 from '../../../images/shoe1.png';
import SearchBar from '../../Static Components/SearchBar/SearchBar';
import DraggableImage from '../../Static Components/DraggableImage';
import { Waves } from '../../Static Components/Waves/Waves';


const TopHomePage = () => {
  return (
    <div className="header">
        <NavBar />
      {/* Content before waves */}
      <div className='outer-header'>

        <div className='middle-content'>
          <div className='middle-content-text'>
            <h1>
              Shoe shopping like never before!
            </h1>
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
            <DraggableImage shoe={shoe1} width="250px"/>
          </div>
          {/* <div className='middle-header'>
            <div className="search-bar">
              <SearchBar />
            </div>
          </div> */}
          <div className="shoe-right">
            <DraggableImage shoe={shoe7} width="250px"/>
          </div>
        </div>
        

      </div>
      <Waves />
    </div>
  );
};

export default TopHomePage;