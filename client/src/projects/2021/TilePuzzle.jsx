import React from "react";
import '../../pagesCSS/Projects.css';

const TilePuzzle = () => {
  return (
    <div className='projectInfo'>
      <h2 className='projectTitle'>Tile Puzzle (Apr 2021)</h2>
      <ul className='projectBody'>
        <li>3 X 3 Tile Board</li>
        <li>User insert a starting state and a goal state</li>
        <li>Program uses the least number of moves to reach the end state</li>
        <li>Uses recursion and removes paths that generate cycles</li>
        <li>Operators used to move tile pieces to generate new states</li>
        <li>Technologies Used:</li>
          <ul>
            <li>Python 3</li>
          </ul>
      </ul>
    </div>
  )
}

export default TilePuzzle;