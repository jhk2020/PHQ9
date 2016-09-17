const initialState = {
  BHPNeeded: false,
  selectedBHP: -1,
  totalScore: 0
}

export default function results (state = initialState, action) {
  switch (action.type) {
    case 'SUBMIT_AS_MODERATE_OR_HIGHER':
      return Object.assign({}, state, {
        BHPNeeded: true,
        totalScore: action.totalScore
      });

    case 'SUBMIT_AS_MILD':
      return Object.assign({}, state, {
        BHPNeeded: false,
        totalScore: action.totalScore
      });

    case 'SELECT_THERAPIST':
      return Object.assign({}, state, {
        selectedBHP: action.therapistId
      });

    default:
      return state;
  }
}
