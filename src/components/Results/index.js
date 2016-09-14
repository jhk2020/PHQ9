import React from 'react';
import { connect } from 'react-redux';
import Results from './Results.jsx';

function mapStateToProps(state) {
  return {
    // Not totally necessary for small-scale apps like this, but we can use a library like "reselect" to memo-ize these calcuations
    totalScore: state.questions.reduce((a, b) => a + b)
  }
}

export default connect(mapStateToProps, null)(Results);
