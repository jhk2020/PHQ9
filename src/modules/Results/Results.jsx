import React from 'react';
import Therapist from './Therapist.jsx';

const Results = (props) => {
  let results;
  if (props.BHPNeeded === false) {

    results = <h3>You are all set!</h3>;

  } else {
    if (props.selectedBHP === undefined) {
      const therapists = props.therapists.map((therapist) => (
        <Therapist
          key={therapist.id}
          clickHandler={props.selectTherapist.bind(null, therapist.id)}
          therapist={therapist}
        />
      ));

      results = (
        <div>
          <h3>Please select a behavioral healthcare provider from the list below:</h3>
          <div>{therapists}</div>
        </div>
      );

    } else {

      results = (
        <div>
          <h1>Thank you!</h1>
          <h3>{props.selectedBHP.name}</h3>
        </div>
      );

    }
  }
  return results;
};

export default Results;
