import questionList from '../../data/questions.json';

export default function questions (state = questionList, action) {
  switch (action.type) {
    case 'CHOOSE_SCORE':
      return state.map((question, index) => {
        if (index === action.questionIndex) {
          return Object.assign({}, question, {
            score: action.score
          });
        } else {
          return Object.assign({}, question);
        }
      });

    default:
      return state;
  }
}
