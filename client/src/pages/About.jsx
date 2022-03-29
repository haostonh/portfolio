import React from 'react';
import Helmet from 'react-helmet';
import '../pagesCSS/About.css';
import NavBar from '../components/NavBar';
import PortfolioHelmet from '../components/PortfolioHelmet';

const About = () => {
  return (
    <div>
      <PortfolioHelmet/>
      <NavBar/>
    </div>
  );
};

export default About;