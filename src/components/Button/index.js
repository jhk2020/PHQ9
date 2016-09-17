import React from 'react';
import './Button.scss';

const Button = (props) => (
  <button className='button' onClick={props.onClick}>{props.text}</button>
)

export default Button;
