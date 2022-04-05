import React from 'react';
import '../pagesCSS/Projects.css';
import NavBar from '../components/NavBar';
import PortfolioHelmet from '../components/PortfolioHelmet';
import BankingSystem from '../projects/2022/BankingSystem';
import TicTacToe from '../projects/2022/TicTacToe';
import TicTacToeIcon from '../images/Tic-Tac-Toe-Icon.png';

const Projects = () => {
  return (
    <div>
      <PortfolioHelmet/>
      <NavBar/>
      <div id='projectsFont'>
        <h1 className='yearTitle'>2022</h1>
        <BankingSystem/>
        <div className='projectBodyImageContainer'>
          <TicTacToe/>
          <img className='projectImage' src={TicTacToeIcon} alt={'Tic-Tac-Toe Icon'} width='200px' height='200px'/>
        </div>
      </div>
    </div>
  );
};

export default Projects;