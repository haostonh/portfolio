import React from 'react';
import Helmet from 'react-helmet';
import '../pagesCSS/Projects.css';
import NavBar from '../components/NavBar';

const Projects = () => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #D3D3D3 }'}</style>
      </Helmet>
      <NavBar/>
      <div>
        <h1 className='yearTitle'>2022</h1>
        <h2 className='projectTitle'>Banking System (Jan 2022 - March 2022)</h2>
        <ul className='projectBody'>
          <li>
            <a href='https://github.com/haostonh/Banking-System' target='_blank' rel='noreferrer'>GitHub Link</a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Projects;