import React from "react";
import '../../pagesCSS/Projects.css';

const Hexapawn = () => {
  return (
    <div className='projectInfo'>
      <h2 className='projectTitle'>Hexapawn (May 2021)</h2>
      <ul className='projectBody'>
        <li>3 X 3 Chess Board</li>
        <li>3 pawns per side of chess board</li>
        <li>First chess piece to reach other side wins</li>
        <li>Follows movement and capture of regular pawns</li>
        <li>Technologies Used:</li>
          <ul>
            <li>Python 3</li>
          </ul>
      </ul>
    </div>
  )
}

export default Hexapawn;