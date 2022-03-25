import React from 'react';
import Helmet from 'react-helmet';
import '../pagesCSS/About.css';
import NavBar from '../components/NavBar';

const About = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #FFFFF0 }'}</style>
      </Helmet>
      <NavBar/>
    </div>
  );
};

export default About;