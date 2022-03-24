import React from 'react';
import Helmet from 'react-helmet';
import '../pagesCSS/Contact.css';
import NavBar from '../components/NavBar';
import linkedinicon from '../images/linkedin-icon.jpg';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #D3D3D3 }'}</style>
      </Helmet>
      <NavBar/>
      <div className='contactFont'>
        <h1 className='contactTitle'>GET IN TOUCH</h1>
        <img src={linkedinicon} alt={"LinkedIn Icon"} width='50' height='50'/>
      </div>
    </div>
  );
};

export default Contact;