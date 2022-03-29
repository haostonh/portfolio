import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

const NavBarButton = props => {
  <Button component={Link} to={props.to} color="primary"
  sx={{

  }}>{props.text}</Button>
}

export default NavBarButton;