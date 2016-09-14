export function startQuestionnaire() {
  return {
    type: 'START_QUESTIONNAIRE'
  }
}

export function goNext() {
  return {
    type: 'NEXT_QUESTION'
  }
}

export function goPrev() {
  return {
    type: 'PREV_QUESTION'
  }
}

export function checkSubmit() {
  return (dispatch, getState) => {
    const { questions } = getState();

    for (var i = 0; i < questions.length; i++) {
      if (questions[i].score < 0) {
        dispatch(throwError());
        return;
      };
    }

    dispatch(submit());
  }
}

function submit() {
  return {
    type: 'SUBMIT_ANSWERS'
  }
}

function throwError() {
  return {
    type: 'ERROR_SUBMITTING'
  }
}
