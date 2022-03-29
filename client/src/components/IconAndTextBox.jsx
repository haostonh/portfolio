import React from "react";
import '../componentsCSS/IconAndTextBox.css';

const IconAndTextBox = props => {
  return (
    <div id='componentIconTextBox'>
      <img id='componentIconFormat' src={props.src} alt={props.alt}/>
      <a id='componentTextFormat' href={props.href} target='_blank' rel='noopener noreferrer'>{props.text}</a>
    </div>
  )
}

export default IconAndTextBox;