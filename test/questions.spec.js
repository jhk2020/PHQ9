import chai from 'chai';
const { expect } = chai;
import { shallow } from 'enzyme';
import spies from 'chai-spies';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/App';

import Question from '../src/modules/Question/Question';
import * as questionActions from '../src/actions/questionActions';
import questionReducer from '../src/reducers/questions';
import questionList from '../data/questions.json';

chai.use(spies);

describe('question actions', () => {
  it ('should create an action select a score', () => {
    const score = 3;
    const questionIndex = 3;

    const expectedAction = {
      type: 'CHOOSE_SCORE',
      score,
      questionIndex
    };
    expect(questionActions.chooseScore(score, questionIndex)).eql(expectedAction);
  });
});

describe ('question reducer', () => {
  it ('should return the initial state', () => {
    expect(questionReducer(undefined, {})).eql(questionList);
  });

  it ('should handle "CHOOSE_SCORE"', () => {
    const score = 3;
    const testQuestion = {
      text: 'Little interest or pleasure in doing things?',
      score: -1
    };

    const action = questionActions.chooseScore(score, 0);

    var newQuestionList = questionList.map((question, index) => {
      if (question.text === testQuestion.text) {
        return Object.assign({}, question, {
          score: score
        });
      }

      return Object.assign({}, question);
    });

    expect(questionReducer(questionList, action)).eql(newQuestionList);
  });
});

describe ('Question component', () => {
  function setup () {
    const props = {
      chooseScore: chai.spy(),
      currentQuestion: {
        text: 'Little interest or pleasure in doing things?',
        score: -1
      },
      score: 0,
      currentIndex: 0
    };

    const enzymeWrapper = shallow(<Question {...props} />);

    return {
      props,
      enzymeWrapper
    }
  }

  it ('should call "chooseScore" if li is clicked on', () => {
    const { enzymeWrapper, props } = setup();
    const li = enzymeWrapper.findWhere(n => n.type() === 'li' && n.contains(<span>Not at all</span>));

    li.props().onClick();
    expect(props.chooseScore).to.have.been.called();
  });
});
