import React from 'react';
import './EndCredits.scss';
import NavBar from '../../Static Components/NavBar/NavBar';
import shoe7 from '../../../images/shoe7.png';
import shoe1 from '../../../images/shoe1.png';
import SearchBar from '../../Static Components/SearchBar/SearchBar';
import DraggableImage from '../../Static Components/DraggableImage';
import { Waves } from '../../Static Components/Waves/Waves';


const EndCredits = () => {
  return (
    <div className="header">
        <div className='waves-upside-down'>
            <Waves />
        </div>

      <div className='credits-outer-header'>
        <div className='credits-container'>
            <div><h3>My Account</h3></div>
            <div><h3>Customer Service</h3></div>
            <div><h3>Information</h3></div>
            <div><h3>Top Brands</h3></div>
        </div>
        
      </div>

    </div>
  );
};

export default EndCredits;