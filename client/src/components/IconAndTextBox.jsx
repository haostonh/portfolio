import React from "react";
import '../componentsCSS/IconAndTextBox.css';
import Button from '@mui/material/Button';

const IconAndTextBox = props => {
  return (
    <div id='componentIconTextBox'>
      <img id='componentIconFormat' src={props.src} alt={props.alt}/>
      <Button id='componentTextFormat' href={props.href} target='_blank' rel='noopener noreferrer'>{props.text}</Button>
    </div>
  )
}

export default IconAndTextBox;