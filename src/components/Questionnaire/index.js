import React from 'react';
import { connect } from 'react-redux';
import Questionnaire from './Questionnaire.jsx';

function mapStateToProps(state) {
  return {
    hasStarted: state.hasStarted
  }
}

export default connect(mapStateToProps)(Questionnaire);
