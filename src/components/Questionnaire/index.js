import React from 'react';
import { connect } from 'react-redux';
import Questionnaire from './Questionnaire.jsx';
import { startQuestionnaire } from '../../actions/navActions';

function mapStateToProps (state) {
  return {
    hasStarted: state.hasStarted
  }
}

export default connect(null)(Questionnaire);
