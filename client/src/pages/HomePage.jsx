import React from 'react';
import '../pagesCSS/HomePage.css';
import NavBar from '../components/NavBar';
import PortfolioHelmet from '../components/PortfolioHelmet';
import profile from '../images/Haoston_Huynh_Profile_Picture.jpg';

const HomePage = () => {
  return (
    <div>
      <PortfolioHelmet/>
      <NavBar/>
      <div id='homepageContainer'>
        <img id='homepageHHPic' src={profile} alt={"Haoston Huynh's Profile"} width='256' height='384'/>
        <div id='homepageTextBody'>
          <h1 id='homepageIntroTitle'>Welcome to Haoston Huynh's Page!</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;