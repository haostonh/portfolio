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
    </div>
  );
};

export default Projects;