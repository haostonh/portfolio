import React from 'react';
import Helmet from 'react-helmet';
import '../pagesCSS/About.css';
import NavBar from '../components/NavBar';
import resumelogo from '../images/HH-Logo-Transparent-576px.png';

const About = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #FFFFF0 }'}</style>
      </Helmet>
      <NavBar/>
      <img src={resumelogo} alt={"Haoston Huynh's Logo"}/>
    </div>
  );
};

export default About;