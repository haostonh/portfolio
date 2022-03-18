import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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

const NavBar = () => {
  return (
    <ThemeProvider>
        {/*<ToolBar> */}
        <div className="customizeNavBar">
            <div className="navBarTitle">Haoston Huynh</div>
            <div className="navButtonBar">
                <ThemeProvider theme={tabsTheme}>
                <Button component={Link} to="/portfolio" color="primary" 
                style={{ color: "#000000", fontSize: "30px", fontWeight: "500", fontFamily: "'Roboto', sans-serif", marginLeft: '10px', marginTop: '12px', letterSpacing:"1px"}}>Home</Button>
                <Button component={Link} to="/portfolio/about" color="primary" 
                style={{ color: "#000000", fontSize: "30px",fontWeight: "500", fontFamily: "'Roboto', sans-serif", marginLeft: '10px', marginTop: '12px', letterSpacing:"1px"}}>About</Button>
                <Button component={Link} to="/portfolio/projects" color="primary" 
                style={{ color: "#000000", fontSize: "30px", fontWeight: "500", fontFamily: "'Roboto', sans-serif", marginLeft: '10px', marginTop: '12px', letterSpacing:"1px"}}>Projects</Button>
                <Button component={Link} to="/portfolio/contact" color="primary" 
                style={{ color: "#000000", fontSize: "30px", fontWeight: "500", fontFamily: "'Roboto', sans-serif", marginLeft: '10px', marginTop: '12px', letterSpacing:"1px"}}>Contact</Button>
                </ThemeProvider>
            </div>
        </div>
        {/*</ToolBar> */}
    </ThemeProvider>
  )
}

export default NavBar;