import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import '../componentsCSS/NavBar.css';
import NavBarButton from './NavBarButton';
import hhlogo from '../images/HH-Logo-Transparent-576px.png';

const tabsTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: grey[900],
    },
  },
});

const NavBar = () => {
  return (
    <ThemeProvider>
      <div id="customizeNavBar">
        <img id="navBarHHLogo" src={hhlogo} alt={"Haoston Huynh's Logo"}/>
        <div id="navButtonBar">
          <ThemeProvider theme={tabsTheme}>
            <NavBarButton to="/portfolio" text="Home"/>
            <NavBarButton to="/portfolio/about" text="About"/>
            <NavBarButton to="/portfolio/projects" text="Projects"/>
            <NavBarButton to="/portfolio/contact" text="Contact"/>
          </ThemeProvider>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default NavBar;