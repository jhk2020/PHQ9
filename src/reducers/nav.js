const initialState = {
  hasStarted: false,
  currentQuestion: -1,
  hasFinished: false,
  errorMessage: ''
}

export default function nav (state = initialState, action) {
  switch (action.type) {
    case 'START_QUESTIONNAIRE':
      return Object.assign({}, state, {
        hasStarted: true,
        currentQuestion: 0
      });

    case 'NEXT_QUESTION':
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion + 1
      });

    case 'PREV_QUESTION':
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion - 1
      });

    case 'SUBMIT_SUCCESS':
      return Object.assign({}, state, {
        hasFinished: true
      });

    case 'SUBMIT_ERROR':
      return Object.assign({}, state, {
        errorMessage: 'Please make sure you have answered every question!'
      });

    default:
      return state;
  }
}
