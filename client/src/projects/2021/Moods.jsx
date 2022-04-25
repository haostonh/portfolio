import React from "react";
import '../../pagesCSS/Projects.css';

const Moods = () => {
  return (
    <div className='projectInfo'>
      <h2 className='projectTitle'>Moods (Feb 2021)</h2>
      <ul className='projectBody'>
        <li>Allow user to create notes to reflect their mood</li>
        <li>Practice using Jetpack Navigation</li>
        <li>Used Room Database to store data</li>
        <li>Technologies Used:</li>
          <ul>
            <li>Kotlin</li>
          </ul>
      </ul>
    </div>
  )
}

export default Moods;