import React from 'react';
import Helmet from 'react-helmet';
import '../pagesCSS/HomePage.css';
import NavBar from '../components/NavBar';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #D3D3D3 }'}</style>
      </Helmet>
      <NavBar/>
    </div>
  );
};

export default HomePage;