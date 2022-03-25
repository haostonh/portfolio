import React from 'react';
import Helmet from 'react-helmet';
import '../pagesCSS/Contact.css';
import NavBar from '../components/NavBar';
import linkedinicon from '../images/linkedin-icon.jpg';
import githubicon from '../images/GitHub-Mark-64px.png';
import leetcodeicon from '../images/LeetCode-Icon-Square.png';
import hackerrankicon from '../images/HackerRank-Icon-480px.png';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #FFFFF0 }'}</style>
      </Helmet>
      <NavBar/>
      <div className='contactFont'>
        <h1 className='contactTitle'>GET IN TOUCH</h1>
        <div className='contactPictureandTextBox'>
          <img className='contactPictureFormat' src={linkedinicon} alt={"LinkedIn Icon"} width='64' height='64'/>
          <a className='contactTextFormat' href='https://www.linkedin.com/in/haoston-huynh/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        </div>
        <div className='contactPictureandTextBox'>
          <img className='contactPictureFormat' src={githubicon} alt={"GitHub Icon"} width='64' height='64'/>
          <a className='contactTextFormat' href='https://github.com/haostonh' target='_blank' rel='noopener noreferrer'>GitHub</a>
        </div>
        <div className='contactPictureandTextBox'>
          <img className='contactPictureFormat' src={leetcodeicon} alt={"LeetCode Icon"} width='64' height='64'/>
          <a className='contactTextFormat' href='https://leetcode.com/haostonh/' target='_blank' rel='noopener noreferrer'>LeetCode</a>
        </div>
        <div className='contactPictureandTextBox'>
          <img className='contactPictureFormat' src={hackerrankicon} alt={"HackerRank Icon"} width='64' height='64'/>
          <a className='contactTextFormat' href='https://www.hackerrank.com/haostonh' target='_blank' rel='noopener noreferrer'>HackerRank</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;