import React from 'react';
import Button from 'components/Button';

import './Intro.scss';

const Intro = (props) => (
  <div>
    <div className='header'>
      <h1 className='header-text'>PHQ-9 test</h1>
    </div>
    <div className='content intro-text'>
      <p>
        This easy to use patient questionnaire is a self-administered version of the PRIME-MD diagnostic instrument for common mental disorders. The PHQ-9 is the depression module, which scores each of the nine DSM-IV criteria as "0" (not at all) to "3" (nearly every day). It has been validated for use in primary care.
      </p>
      <div className='button-container'>
        <Button onClick={props.startQuestionnaire} text='Begin'/>
      </div>
    </div>
  </div>
)

export default Intro;
