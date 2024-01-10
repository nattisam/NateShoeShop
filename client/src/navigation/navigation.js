import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import MenPage from '../screens/MenPage';
import WomenPage from '../screens/WomenPage';
import KidsPage from '../screens/KidsPage';
import BrandsPage from '../screens/BrandsPage';
import Intro from '../components/Dynamic Components/Intro/Intro';

function Navigation() {
  return (
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/brands" element={<BrandsPage />} />
      </Routes>
  );
}

export default Navigation;