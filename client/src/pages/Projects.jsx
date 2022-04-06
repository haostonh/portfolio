import React from 'react';
import '../pagesCSS/Projects.css';
import NavBar from '../components/NavBar';
import PortfolioHelmet from '../components/PortfolioHelmet';
import BankingSystem from '../projects/2022/BankingSystem';
import BankingSystemDB from '../images/Banking-System-DB.png';
import BankingSystemPrompt from '../images/Banking-System-Prompt.png';
import TicTacToe from '../projects/2022/TicTacToe';
import TicTacToeIcon from '../images/Tic-Tac-Toe-Icon.png';
import TicTacToeDemo from '../images/Tic-Tac-Toe-Demo.png';

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
      </div>
    </div>
  );
};

export default Projects;