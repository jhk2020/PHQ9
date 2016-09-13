import React from 'react';
import { connect } from 'react-redux';
import Question from './Question.jsx';

function mapStateToProps(state) {
  return {
    currentQuestion: state.currentQuestion
  }
}

export default connect(mapStateToProps)(Question);
