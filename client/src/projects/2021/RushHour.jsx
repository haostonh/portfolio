import React from "react";
import '../../pagesCSS/Projects.css';

const RushHour = () => {
  return (
    <div className='projectInfo'>
      <h2 className='projectTitle'>Rush Hour (Apr 2021 - May 2021)</h2>
      <ul className='projectBody'>
        <li>Created with Python 3</li>
        <li>Vehicle exits a traffic jam/grid in optimal number of moves</li>
        <li>Created 2 heuristics comparing runtimes and h(n)</li>
        <li>First heuristic: Implemented using the A* search algorithm</li>
        <li>Second heruristic: Created my own</li>
        <li>Technologies Used:</li>
          <ul>
            <li>Python 3</li>
          </ul>
      </ul>
    </div>
  )
}

export default RushHour;