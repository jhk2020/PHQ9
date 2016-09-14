export function chooseScore(score, questionIndex) {
  return {
    type: 'CHOOSE_SCORE',
    score,
    questionIndex
  }
}
