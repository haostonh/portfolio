import React from "react";
import '../../pagesCSS/Projects.css';

const SentiVent = () => {
  return (
    <div className='projectInfo'>
      <h2 className='projectTitle'>SentiVent (Jan 2021)</h2>
      <ul className='projectBody'>
        <li>Write journal entries to vent emotions</li>
        <li>Track Keywords using Cloud Natural Language API</li>
        <li>Technologies Used:</li>
          <ul>
            <li>React Native</li>
            <li>ExpressJS</li>
            <li>Google Cloud API</li>
            <li>OAuth</li>
          </ul>
      </ul>
    </div>
  )
}

export default SentiVent;