import React from "react";
import '../components/IconAndTextBox.css';

const IconAndTextBox = props => {
  return (
    <div className='componentIconTextBox'>
      <img className='componentIconFormat' src={props.src} alt={props.alt}/>
      <a className='componentTextFormat' href={props.href} target='_blank' rel='noopener noreferrer'>{props.text}</a>
    </div>
  )
}

export default IconAndTextBox;