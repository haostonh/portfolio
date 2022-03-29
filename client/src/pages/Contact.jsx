import React from 'react';
import '../pagesCSS/Contact.css';
import NavBar from '../components/NavBar';
import PortfolioHelmet from '../components/PortfolioHelmet';
import IconAndTextBox from '../components/IconAndTextBox';
import linkedinicon from '../images/linkedin-icon.jpg';
import githubicon from '../images/GitHub-Mark-64px.png';
import leetcodeicon from '../images/LeetCode-Icon-Square.png';
import hackerrankicon from '../images/HackerRank-Icon-480px.png';

const Contact = () => {
  return (
    <div>
      <PortfolioHelmet/>
      <NavBar/>
      <div className='contactFont'>
        <h1 className='contactTitle'>GET IN TOUCH</h1>
        <IconAndTextBox src={linkedinicon} alt={'LinkedIn Icon'} text='LinkedIn' href='https://www.linkedin.com/in/haoston-huynh/'/>
        <IconAndTextBox src={githubicon} alt={'GitHub Icon'} text='GitHub' href='https://github.com/haostonh'/>
        <IconAndTextBox src={leetcodeicon} alt={'LeetCode Icon'} text='LeetCode' href='https://leetcode.com/haostonh/'/>
        <IconAndTextBox src={hackerrankicon} alt={'HackerRank Icon'} text='HackerRank' href='https://www.hackerrank.com/haostonh'/>
      </div>
    </div>
  );
};

export default Contact;