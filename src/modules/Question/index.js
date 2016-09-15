import React from 'react';
import { connect } from 'react-redux';
import Question from './Question.jsx';
import { goNext, goPrev, checkSubmit } from '../../actions/navActions';
import { chooseScore } from '../../actions/questionActions';

function mapStateToProps(state) {
  let { nav, questions } = state;

  return {
    currentQuestion: questions[nav.currentQuestion],
    currentIndex: nav.currentQuestion,
    errorMessage: nav.errorMessage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goNext: () => {
      dispatch(goNext());
    },
    goPrev: () => {
      dispatch(goPrev());
    },
    chooseScore: (score, questionIndex) => {
      dispatch(chooseScore(score, questionIndex));
    },
    checkSubmit: () => {
      dispatch(checkSubmit());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
