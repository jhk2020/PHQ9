import React from 'react';

const Therapist = (props) => (
  <div onClick={props.clickHandler}>{props.therapist.name}</div>
);

export default Therapist;
