import React from 'react';
import '../pagesCSS/Projects.css';
import NavBar from '../components/NavBar';
import PortfolioHelmet from '../components/PortfolioHelmet';
import BankingSystem from '../projects/2022/BankingSystem';
import TicTacToe from '../projects/2022/TicTacToe';
import GitHubButton from '../components/GitHubButton';

const Projects = () => {
  return (
    <div>
      <PortfolioHelmet/>
      <NavBar/>
      <div className='projectsFont'>
        <h1 className='yearTitle'>2022</h1>
        <BankingSystem/>
        <TicTacToe/>
        <GitHubButton/>
      </div>
    </div>
  );
};

export default Projects;