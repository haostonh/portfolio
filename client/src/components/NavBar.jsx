import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import '../componentsCSS/NavBar.css';

/* Currently in use NavBar */
/*const background = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: orange[500],
    },
  },
  shadows: ["none"]
});*/

const tabsTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: orange[500],
    },
  },
});

const navBarButtonStyle = makeStyles(theme => ({
  button: {
    color: "#000000", 
    fontSize: "20px",
    fontWeight: "500", 
    fontFamily: "'Roboto', sans-serif", 
    marginLeft: '0px',
    marginTop: '0px',
    letterSpacing:"1px",
    "@media (min-width: 426px)": {
      fontSize: "30px",
      marginLeft: '10px', 
      marginTop: '12px'
    }
  }
}));

const NavBar = () => {
  const classes = navBarButtonStyle();
  return (
    <ThemeProvider>
        {/*<ToolBar> */}
        <div className="customizeNavBar">
            <div className="navBarTitle">Haoston Huynh</div>
            <div className="navButtonBar">
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
            </div>
        </div>
        {/*</ToolBar> */}
    </ThemeProvider>
  )
}

export default NavBar;