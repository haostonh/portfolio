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
        <div className='contactPictureandTextBox'>
          <img className='contactPictureFormat' src={linkedinicon} alt={"LinkedIn Icon"} width='50' height='50'/>
          <a className='contactTextFormat' href='https://www.linkedin.com/in/haoston-huynh/' target='_blank' rel='noreferrer'>LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;