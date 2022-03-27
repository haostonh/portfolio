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
      <div className='homepageContainer'>
        <img src={profile} alt={"Haoston Huynh's Profile"} width='256' height='384'/>
        <div>
          <h1>Welcome to Haoston Huynh's Page!</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;