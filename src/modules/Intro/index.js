import React from 'react';
import { connect } from 'react-redux';
import Intro from './Intro.jsx';
import { startQuestionnaire } from '../../actions/navActions';

function mapDispatchToProps(dispatch) {
  return {
    startQuestionnaire: () => {
      dispatch(startQuestionnaire());
    }
  }
}

export default connect(null, mapDispatchToProps)(Intro);
