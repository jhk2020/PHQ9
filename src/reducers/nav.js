const initialState = {
  hasStarted: false,
  currentQuestion: -1,
  hasFinished: false
}

export default function nav (state = initialState, action) {
  switch (action.type) {
    case 'QUESTIONNAIRE_STARTED':
      return Object.assign({}, state, {
        hasStarted: true,
        currentQuestion: 0
      });

    default:
      return state;
  }
}
