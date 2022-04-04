import React from "react";
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

const GitHubButton = props => {
  return (
    <Button target='_blank' rel='noopener noreferrer' href={props.href}
    sx={{
      color: 'black',
      border: 'solid',
      borderColor: 'black',
    }}>GitHub</Button>
  )
}

export default GitHubButton;