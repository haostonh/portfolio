import React from 'react';
import '../pagesCSS/Projects.css';
import NavBar from '../components/NavBar';
import PortfolioHelmet from '../components/PortfolioHelmet';
import BankingSystem from '../projects/2022/BankingSystem';
import BankingSystemDB from '../images/Banking-System-DB.png';
import BankingSystemPrompt from '../images/Banking-System-Prompt.png';
import DiningForLove from '../projects/2021/DiningForLove';
import DiningForLovePage1 from '../images/DiningForLove-Page1.png';
import Hexapawn from '../projects/2021/Hexapawn';
import HexapawnIcon from '../images/Hexapawn-Icon.jpg';
import Moods from '../projects/2021/Moods';
import MoodsPage1 from '../images/Moods-Page1.png';
import MoodsPage1Updated from '../images/Moods-Page1-Note.png';
import MoodsPage2 from '../images/Moods-Page2.png';
import RentWell from '../projects/2021/RentWell';
import RentWellPage1 from '../images/RentWell-Page1.png';
import RentWellPage1Info from '../images/RentWell-Page1-Info.png';
import RentWellPage2 from '../images/RentWell-Page2.png';
import RSSReader from '../projects/2021/RSSReader';
import RSSReaderPage1 from '../images/RSSReader-Page1.png';
import RSSReaderPage2 from '../images/RSSReader-Page2.png';
import RSSReaderPage3 from '../images/RSSReader-Page3.png';
import RushHour from '../projects/2021/RushHour';
import RushHourPic from '../images/Rush-Hour-Game.jpg';
import SentiVent from '../projects/2021/SentiVent';
import SentiVentLogo from '../images/SentiVent-Logo.png';
import SongWithFriends from '../projects/2020/SongWithFriends';
import SongWithFriendsIcon from '../images/SongWithFriends-Icon.png';
import TicTacToe from '../projects/2022/TicTacToe';
import TicTacToeIcon from '../images/Tic-Tac-Toe-Icon.png';
import TicTacToeDemo from '../images/Tic-Tac-Toe-Demo.png';
import TilePuzzle from '../projects/2021/TilePuzzle';
import TilePuzzlePic from '../images/Tile-Puzzle-Example.png';

const Projects = () => {
  return (
    <div>
      <PortfolioHelmet/>
      <NavBar/>
      <div id='projectPageStyle'>
        <h1 className='yearTitle'>2022</h1>
        <div className='projectBodyImageContainer'>
          <BankingSystem/>
          <div className='projectImageColumn'>
            <img className='projectImage projectImage80Percent' src={BankingSystemDB} alt={'Banking System DB'} width='60%' height='60%'/>
            <img className='projectImage projectImage80Percent' src={BankingSystemPrompt} alt={'Banking System Prompt'} width='50%' height='50%'/>
          </div>
        </div>
        <div className='projectBodyImageContainer'>
          <TicTacToe/>
          <img className='projectImage' src={TicTacToeIcon} alt={'Tic-Tac-Toe Icon'} width='200px' height='200px'/>
          <img className='projectImage projectImage250px' src={TicTacToeDemo} alt={'Tic-Tac-Toe Demo'} width='300px' height='300px'/>
        </div>

        <h1 className='yearTitle'>2021</h1>
        <div className='projectBodyImageContainer'>
          <Hexapawn/>
          <img className='projectImage projectImage250px' src={HexapawnIcon} alt={'Hexapawn Icon'} width='300px' height='300px'/>
        </div>
        <div className='projectBodyImageContainer'>
          <RushHour/>
          <img className='projectImage projectImage250px' src={RushHourPic} alt={'Rush Hour Game'} width='300px' height='300px'/>
        </div>
        <div className='projectBodyImageContainer'>
          <TilePuzzle/>
          <img className='projectImage projectImage250px' src={TilePuzzlePic} alt={'Tile Puzzle'} width='300px' height='300px'/>
        </div>
        <div className='projectBodyImageContainer'>
          <DiningForLove/>
          <img className='projectImage projectImage80Percent' src={DiningForLovePage1} alt={'Dining For Love Page 1'} width='216px' height='384px'/>
        </div>
        <div className='projectBodyImageContainer'>
          <RentWell/>
          <img className='projectImage projectImage80Percent' src={RentWellPage1} alt={'RentWell Page 1'} width='216px' height='384px'/>
          <img className='projectImage projectImage80Percent' src={RentWellPage1Info} alt={'RentWell Page 1 Info'} width='216px' height='384px'/>
          <img className='projectImage projectImage80Percent' src={RentWellPage2} alt={'RentWell Page 2'} width='216px' height='384px'/>
        </div>
        <div className='projectBodyImageContainer'>
          <Moods/>
          <img className='projectImage projectImage80Percent' src={MoodsPage1} alt={'Moods Page 1'} width='216px' height='384px'/>
          <img className='projectImage projectImage80Percent' src={MoodsPage2} alt={'Moods Page 2'} width='216px' height='384px'/>
          <img className='projectImage projectImage80Percent' src={MoodsPage1Updated} alt={'Moods Page 1 with Note'} width='216px' height='384px'/>
        </div>
        <div className='projectBodyImageContainer'>
          <RSSReader/>
          <img className='projectImage projectImage80Percent' src={RSSReaderPage1} alt={'RSS Reader Page 1'} width='216px' height='384px'/>
          <img className='projectImage projectImage80Percent' src={RSSReaderPage2} alt={'RSS Reader Page 2'} width='216px' height='384px'/>
          <img className='projectImage projectImage80Percent' src={RSSReaderPage3} alt={'RSS Reader Page 3'} width='216px' height='384px'/>
        </div>
        <div className='projectBodyImageContainer'>
          <SentiVent/>
          <img className='projectImage projectImage80Percent' src={SentiVentLogo} alt={'SentiVent'}/>
        </div>

        <h1 className='yearTitle'>2020</h1>
        <div className='projectBodyImageContainer'>
          <SongWithFriends/>
          <img className='projectImage projectImage250px' src={SongWithFriendsIcon} alt={'Song With Friends Icon'} width='300px' height='300px'/>
        </div>
      </div>
    </div>
  );
};

export default Projects;