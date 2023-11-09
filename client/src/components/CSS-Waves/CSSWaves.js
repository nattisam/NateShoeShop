import React from 'react';
import './CSSWaves.scss';
import NavBar from '../NavBar/NavBar';
import classic_shoe2 from '../../images/classic_shoe2.png';
import shoe1 from '../../images/shoe1.png';
// import SearchBar from '../SearchBar/SearchBar';

const CSSWaves = () => {
  return (
    <div className="header">
        <NavBar />
      {/* Content before waves */}
      <div className="inner-header">
        <div className="shoe-left">
            <img src={shoe1} style={{ width: '270px', height: 'auto' }} />
        </div>
        {/* <SearchBar /> */}
        <div className="shoe-right">
            <img src={classic_shoe2} style={{ width: '300px', height: 'auto' }} />
        </div>
      </div>

      {/* Waves Container */}
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      {/* Waves end */}
    </div>
  );
};

export default CSSWaves;