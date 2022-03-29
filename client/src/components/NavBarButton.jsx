import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

const NavBarButton = props => {
  <Button component={Link} to={props.to} color="primary"
  sx={{
    color: "#000000",
    fontFamily: "'Roboto', sans-serif", 
    fontSize: "25px",
    fontWeight: "500", 
    marginLeft: "5px",
    marginRight: "5px",
    '@media (min-width: 426px) and (max-width: 1024px)': {
      fontSize: "25px",
    },
    '@media (max-width: 425px)': {
      fontSize: "15px",
      marginLeft: "0px",
      marginRight: "0px",
    },
  }}>{props.text}</Button>
}

export default NavBarButton;