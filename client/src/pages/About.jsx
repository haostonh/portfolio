import React from 'react';
import '../pagesCSS/About.css';
import NavBar from '../components/NavBar';
import PortfolioHelmet from '../components/PortfolioHelmet';
import OrienteeringIcon from '../images/Compass-Icon.png';
import IndependenceHighLogo from '../images/Independence-High-School-Logo.jpg';
import PianoIcon from '../images/Piano-Icon.png';
import UCDavisLogo from '../images/UC-Davis-Gold-Blue-Logo.png';
import WallyballIcon from '../images/Wallyball-Icon.png';

const About = () => {
  return (
    <div>
      <PortfolioHelmet/>
      <NavBar/>
      <div id='aboutPageStyle'>
        <h1 className='aboutHeaderTitle'>Education</h1>
        <div className='aboutItemContainer'>
          <img id='UCDavisLogo' src={UCDavisLogo} alt='UC Davis Logo' width='175px'/>
          <div className='aboutTextContainer'>
            <div className='aboutBody aboutItemTitle'>University of California, Davis</div>
            <div className='aboutBody aboutItemYear'>2017 - 2021</div>
          </div>
        </div>
        <div className='aboutItemContainer'>
          <img id='IndependenceHighLogo' src={IndependenceHighLogo} alt='Independence High School Logo' width='175px'/>
          <div className='aboutTextContainer'>
            <div className='aboutBody aboutItemTitle'>Independence High School</div>
            <div className='aboutBody aboutItemYear'>2013 - 2017</div>
          </div>
        </div>
        <h1 className='aboutHeaderTitle'>Hobbies/Interests</h1>
        <div className='aboutItemContainer'>
          <img src={OrienteeringIcon} alt='Orienteering Icon' width='200px' height='200px'></img>
          <div className='aboutBody aboutItemTitle'>Orienteering</div>
        </div>
        <div className='aboutItemContainer'>
          <img src={PianoIcon} alt='Piano Icon' width='200px' height='200px'></img>
          <div className='aboutBody aboutItemTitle'>Piano</div>
        </div>
        <div className='aboutItemContainer'>
          <img src={WallyballIcon} alt='Wallyball Icon' width='200px' height='200px'></img>
          <div className='aboutBody aboutItemTitle'>Wallyball</div>
        </div>
      </div>
    </div>
  );
};

export default About;