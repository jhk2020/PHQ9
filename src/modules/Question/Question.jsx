import React from 'react';
import Button from 'components/Button';

import './Question.scss';

const Question = (props) => (
  <div className='question'>
    <h4 className='question-number'>QUESTION {props.currentIndex + 1}</h4>
    <div className='content'>
      <h1 className='main-question'>Over the last two weeks, how often have you been bothered by any of the following problems:</h1>
      <p>{props.currentQuestion.text}</p>
      <hr className='line' />
      <ul className='options'>
        <li
          onClick={props.chooseScore.bind(null, 0, props.currentIndex)}
          className={props.score === 0 ? 'selected' : null}>
            <span>Not at all</span>
        </li>
        <li
          onClick={props.chooseScore.bind(null, 1, props.currentIndex)}
          className={props.score === 1 ? 'selected' : null}>
            <span>Several days</span>
        </li>
        <li
          onClick={props.chooseScore.bind(null, 2, props.currentIndex)}
          className={props.score === 2 ? 'selected' : null}>
            <span>More than half the days</span>
        </li>
        <li
          onClick={props.chooseScore.bind(null, 3, props.currentIndex)}
          className={props.score === 3 ? 'selected' : null}>
            <span>Nearly every day</span>
        </li>
      </ul>
    </div>
    {
      props.errorMessage !== '' ?
      <div className='error-message'>{props.errorMessage}</div>
      : null
    }
    <div className='button-container'>
      <Button
        onClick={props.currentIndex === 0 ? null : props.goPrev}
        disable={props.currentIndex === 0 ? true : false}
        text='Prev' />
      {
        props.currentIndex === 8 ?
        <Button onClick={props.checkSubmit} text='Submit'/>
        : <Button onClick={props.goNext} text='Next' />
      }
    </div>
  </div>
)

export default Question;
