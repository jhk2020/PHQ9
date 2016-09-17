import React from 'react';
import Therapist from './Therapist.jsx';

import './Results.scss';

const Results = (props) => {
  let results;
  if (props.BHPNeeded === false) {

    results = (
      <div className='no-bhp'>
        <span>
          Thank you for taking the questionnaire.

        </span>
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
        <h4>Based on your score, we suggest speaking with a therapist. Please select from options below:</h4>
        <div>{therapists}</div>
      </div>
    );
  }
  return (
    <div className='results'>
      {results}
      <div className='score-message'>
        <span>Your score is {props.totalScore} / 27.</span>
      </div>
      {
        props.selectedBHP !== undefined ?
        <div className='thank-you-message'>Thank you!</div>
        : null
      }
    </div>

  );
};

export default Results;
