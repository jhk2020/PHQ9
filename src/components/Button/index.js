import React from 'react';
import './Button.scss';

const Button = (props) => {
  let styles;
  if (props.disable === true) {
    styles = {
      backgroundColor: '#D0DBDB'
    }
  } else if (props.text === 'Submit') {
    styles = {
      backgroundColor: '#EAE160'
    }
  }

  return (
    <button
      className='button'
      onClick={props.onClick}
      style={styles}>
      {props.text}
    </button>
  )
}

export default Button;
