import React from "react";
import '../../pagesCSS/Projects.css';
import HHLinkButton from "../../components/HHLinkButton";

const TicTacToe = () => {
  return (
    <div className='projectInfo'>
      <h2 className='projectTitle'>Tic-Tac-Toe (Jan 2022 - Mar 2022)</h2>
      <ul className='projectBody'>
        <li>
          <HHLinkButton href='https://github.com/haostonh/tic-tac-toe' text='GitHub'/>
        </li>
        <li>Created with C++</li>
        <li>Simple Game of Tic-Tac-Toe</li>
        <li>Code Compilation with Makefile</li>
        <li>Technologies Used:</li>
          <ul>
            <li>C++</li>
          </ul>
      </ul>
    </div>
  )
}

export default TicTacToe;