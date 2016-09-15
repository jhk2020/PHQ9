import React from 'react';

const Question = (props) => (
  <div>
    <h1>Over the last two weeks, how often have you been bothered by any of the following problems?</h1>
    <p>{props.currentQuestion.text}</p>
    <ul>
      <li onClick={props.chooseScore.bind(null, 0, props.currentIndex)}>Not at all</li>
      <li onClick={props.chooseScore.bind(null, 1, props.currentIndex)}>Several days</li>
      <li onClick={props.chooseScore.bind(null, 2, props.currentIndex)}>More than half the days</li>
      <li onClick={props.chooseScore.bind(null, 3, props.currentIndex)}>Nearly every day</li>
    </ul>
    <button onClick={props.currentIndex === 0 ? null : props.goPrev}>Prev</button>
    {
      props.currentIndex === 8 ?
        <button onClick={props.checkSubmit}>Submit</button>
      : <button onClick={props.goNext}>Next</button>
    }
    {
      props.errorMessage !== '' ?
        <div>{props.errorMessage}</div>
      : null
    }
  </div>
)

export default Question;
