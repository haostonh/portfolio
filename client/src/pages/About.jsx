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
      <div>Computer Science B.S. from University of California, Davis (2017-2021)</div>
      <div>Independence High School (2013-2017)</div>
      <h1 className='aboutHeaderTitle'>Hobbies/Interests</h1>
    </div>
  );
};

export default About;