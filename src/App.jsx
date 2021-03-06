import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import Questionnaire from 'modules/Questionnaire';
import 'styles/general.scss';

const createStoreWithThunk = applyMiddleware(thunk)(createStore);
const store = createStoreWithThunk(reducers);

// For testing puposes:
module.exports = { store };

const node = (
  <Provider store={store}>
    <Questionnaire />
  </Provider>
)

render(node, document.getElementById('root'));
