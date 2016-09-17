import React from 'react';

import './Therapist.scss';

const Therapist = (props) => {
  let className = 'therapist';
  
  if (props.selectedBHP && props.selectedBHP.id === props.therapist.id)  {
    className += ' selected';
  }

  return (
    <div className={className}>
      <div onClick={props.clickHandler}>{props.therapist.name}</div>
      <br/>
    </div>
  )
};

export default Therapist;
