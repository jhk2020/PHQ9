import React from 'react';
import Intro from '../Intro';
import Question from '../Question';
import Results from '../Results';

const Questionnaire = (props) => {
  let component;
  if (!props.hasStarted) {
    component = <Intro />;
  } else {
    if (props.hasFinished) {
      component = <Results />;
    } else {
      component = <Question />;
    }
  }

  return <div>{component}</div>;

}

export default Questionnaire;
