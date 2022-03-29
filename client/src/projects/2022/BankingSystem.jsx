import React from "react";
import '../../pagesCSS/Projects.css';

const BankingSystem = () => {
  return (
    <div className='projectsProjectContainer'>
      <h2 className='projectTitle'>Banking System (Jan 2022 - Mar 2022)</h2>
      <ul className='projectBody'>
        <li>
          <a href='https://github.com/haostonh/Banking-System' target='_blank' rel='noopener noreferrer'>GitHub Link</a>
        </li>
        <li>Created with Visual Studio 2019 and MySQL</li>
        <li>Keep Track of Customer's Balances using MySQL database</li>
        <li>Technologies Used:</li>
          <ul>
            <li>C++</li>
            <li>Visual Studio 2019 (with Desktop development with C++)</li>
            <li>MySQL C++ Driver (Connector/C++)</li>
            <li>MySQL for Visual Studio</li>
            <li>MySQL Router/Server</li>
          </ul>
      </ul>
    </div>
  )
}

export default BankingSystem;