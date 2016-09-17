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

    for (let i = 0; i < questions.length; i++) {
      if (questions[i].score < 0) {
        dispatch(submitError());
        return;
      };
    }

    const totalScore = questions.reduce((prev, curr) => prev + curr.score, 0);

    dispatch(submitSuccess());

    if (totalScore >= 10) {
      dispatch(moderateOrHigher(totalScore));
    } else {
      dispatch(mild(totalScore));
    }
  }
}

function submitSuccess() {
  return {
    type: 'SUBMIT_SUCCESS'
  }
}

function submitError() {
  return {
    type: 'SUBMIT_ERROR'
  }
}

function moderateOrHigher(totalScore) {
  return {
    type: 'SUBMIT_AS_MODERATE_OR_HIGHER',
    totalScore
  }
}

function mild(totalScore) {
  return {
    type: 'SUBMIT_AS_MILD',
    totalScore
  }
}
