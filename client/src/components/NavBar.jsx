import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import '../componentsCSS/NavBar.css';
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

{/*const navBarButtonStyle = makeStyles(theme => ({
  button: {
    color: "#000000",
    fontFamily: "'Roboto', sans-serif", 
    fontSize: "25px",
    fontWeight: "500", 
    marginLeft: "5px",
    marginRight: "5px",
    "@media (min-width: 426px) and (max-width: 1024px)": {
      fontSize: "25px",
    },
    "@media (max-width:425px)": {
      fontSize: "15px",
      marginLeft: "0px",
      marginRight: "0px",
    }
  }
}));*/}

const NavBar = () => {
  {/*const classes = navBarButtonStyle();*/}
  return (
    <ThemeProvider>
      <div id="customizeNavBar">
        <img id="navBarHHLogo" src={hhlogo} alt={"Haoston Huynh's Logo"}/>
        {/*<div id="navButtonBar">
          <ThemeProvider theme={tabsTheme}>
            <Button component={Link} to="/portfolio" color="primary" 
            className={classes.button}>Home</Button>
            <Button component={Link} to="/portfolio/about" color="primary" 
            className={classes.button}>About</Button>
            <Button component={Link} to="/portfolio/projects" color="primary" 
            className={classes.button}>Projects</Button>
            <Button component={Link} to="/portfolio/contact" color="primary" 
            className={classes.button}>Contact</Button>
          </ThemeProvider>
        </div>*/}
      </div>
    </ThemeProvider>
  )
}

export default NavBar;