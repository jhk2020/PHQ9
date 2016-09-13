import React from 'react';
import Intro from '../Intro';
import Question from '../Question';

export default class Questionnaire extends React.Component {
  render() {
    return (
      <div>
        { !this.props.hasStarted ? <Intro /> : <Question /> }
      </div>
    )
  }
}
