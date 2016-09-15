import { combineReducers } from 'redux';
import nav from './nav';
import questions from './questions';
import therapists from './therapists';
import results from './results';

export default combineReducers({
  nav,
  questions,
  therapists,
  results
});
