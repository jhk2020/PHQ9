import questionList from '../../data/questions.json';

export default function questions (state = questionList, action) {
  switch (action.type) {
    default:
      return state;
  }
}
