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
    </div>
  );
};

export default Contact;