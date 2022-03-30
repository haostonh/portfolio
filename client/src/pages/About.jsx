import React from 'react';
import '../pagesCSS/About.css';
import NavBar from '../components/NavBar';
import PortfolioHelmet from '../components/PortfolioHelmet';

const About = () => {
  return (
    <div className='aboutFont'>
      <PortfolioHelmet/>
      <NavBar/>
      <h1 className='aboutHeaderTitle'>Education</h1>
    </div>
  );
};

export default About;