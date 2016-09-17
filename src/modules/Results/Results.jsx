import React from 'react';
import Therapist from './Therapist.jsx';

import './Results.scss';

const Results = (props) => {
  let results;
  if (props.BHPNeeded === false) {

    results = (
      <div className='content'>
        Thank you for taking the questionnaire.
      </div>
    );

  } else {
    const therapists = props.therapists.map((therapist) => (
      <Therapist
        key={therapist.id}
        clickHandler={props.selectTherapist.bind(null, therapist.id)}
        therapist={therapist}
        selectedBHP={props.selectedBHP}
      />
    ));

    results = (
      <div className='content'>
        <h3>Please select a behavioral healthcare provider from the list below:</h3>
        <div>{therapists}</div>
      </div>
    );
  }
  return (
    <div className='results'>
      {results}
      {
        props.selectedBHP !== undefined ?
        <div className='thank-you-message'>Thank you!</div>
        : null
      }
    </div>
  );
};

export default Results;
