import React from 'react';

export default class Intro extends React.Component {
  render() {
    return (
      <div>
        <div>PHQ-9 test</div>
        <button onClick={this.props.startQuestionnaire}>Begin</button>
      </div>
    )
  }
}
