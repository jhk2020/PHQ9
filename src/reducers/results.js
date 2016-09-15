const initialState = {
  BHPNeeded: false,
  selectedBHP: -1
}

export default function results (state = initialState, action) {
  switch (action.type) {
    case 'SELECT_THERAPIST':
      return Object.assign({}, state, {
        selectedBHP: action.therapistId
      });

    case 'SUBMIT_AS_MODERATE_OR_HIGHER':
      return Object.assign({}, state, {
        BHPNeeded: true
      });

    case 'SUBMIT_AS_MILD':
      return Object.assign({}, state, {
        BHPNeeded: false
      });

    default:
      return state;
  }
}
