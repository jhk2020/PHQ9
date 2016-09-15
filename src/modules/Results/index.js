import React from 'react';
import { connect } from 'react-redux';
import Results from './Results.jsx';
import { selectTherapist } from '../../actions/therapistActions';

function mapStateToProps(state) {
  let selectedBHP;
  for (var i = 0; i < state.therapists.length; i++) {
    if (state.therapists[i].id === state.results.selectedBHP) {
      selectedBHP = state.therapists[i];
    }
  }

  return {
    BHPNeeded: state.results.BHPNeeded,
    therapists: state.therapists,
    selectedBHP
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectTherapist: (therapistId) => {
      dispatch(selectTherapist(therapistId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
