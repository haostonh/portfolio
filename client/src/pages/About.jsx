import React from 'react';
import '../pagesCSS/About.css';
import NavBar from '../components/NavBar';
import PortfolioHelmet from '../components/PortfolioHelmet';

const About = () => {
  return (
    <div>
      <PortfolioHelmet/>
      <NavBar/>
      <div id='aboutFont'>
        <h1 className='aboutHeaderTitle'>Education</h1>
        <div className='aboutBody'>University of California, Davis (2017 - 2021)</div>
        <div className='aboutBody'>Independence High School (2013 - 2017)</div>
        <h1 className='aboutHeaderTitle'>Hobbies/Interests</h1>
      </div>
    </div>
  );
};

export default About;