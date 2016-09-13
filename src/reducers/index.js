import { combineReducers } from 'redux';
import nav from './nav';
import questions from './questions';

export default combineReducers({
  nav,
  questions
});
