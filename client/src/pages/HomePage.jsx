import React from 'react';
import Helmet from 'react-helmet';
import '../pagesCSS/HomePage.css';
import NavBar from '../components/NavBar';
import profile from '../images/Haoston_Huynh_Profile_Picture.jpg';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #FFFFF0 }'}</style>
      </Helmet>
      <NavBar/>
      <img src={profile} alt={"Haoston Huynh's Profile"} width='256' height='384'/>
    </div>
  );
};

export default HomePage;