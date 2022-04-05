import React from "react";
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

const HHLinkButton = props => {
  return (
    <Button target='_blank' rel='noopener noreferrer' href={props.href}
    sx={{
      color: 'black',
      border: 'solid',
      borderColor: 'black',
      paddingTop: '5px',
      paddingBottom: '5px',
      paddingLeft: '10px',
      paddingRight: '10px',
    }}>{props.text}</Button>
  )
}

export default HHLinkButton;