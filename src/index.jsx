import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Questionnaire from './components/Questionnaire';

const store = createStore(reducers);

const node = (
  <Provider store={store}>
    <Questionnaire />
  </Provider>
)

render(node, document.getElementById('root'));
