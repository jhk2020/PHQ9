import React from 'react';
import Intro from '../Intro';
import Question from '../Question';
import Results from '../Results';

const Questionnaire = (props) => (
  <div>
    {
      !props.hasStarted ?
        <Intro />
      : (
        props.hasFinished ?
          <Results />
        : <Question />
      )
    }
  </div>
)

export default Questionnaire;
