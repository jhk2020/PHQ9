import React from 'react';
import Intro from '../Intro';
import Question from '../Question';
import Results from '../Results';

export default class Questionnaire extends React.Component {
  render() {
    return (
      <div>
        {
          !this.props.hasStarted ?
            <Intro />
          : (
            this.props.hasFinished ?
              <Results />
            : <Question />
          )
        }
      </div>
    )
  }
}
