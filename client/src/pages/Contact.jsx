import React from 'react';
import Helmet from 'react-helmet';
import '../pagesCSS/Contact.css';
import NavBar from '../components/NavBar';


const Contact = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #D3D3D3 }'}</style>
      </Helmet>
      <NavBar/>
      <div className='contactFont'>
        <h1>GET IN TOUCH</h1>
        <img src={require('../images/linkedin-icon.jpg')} alt={"LinkedIn Icon"}/>
      </div>
    </div>
  );
};

export default Contact;