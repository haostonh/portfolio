import React from "react";
import HHLinkButton from "../../components/HHLinkButton";
import '../../pagesCSS/Projects.css';

const Hexapawn = () => {
  return (
    <div className='projectInfo'>
      <h2 className='projectTitle'>Dining For Love (Mar 2021)</h2>
      <ul className='projectBody'>
        <li>
          <HHLinkButton text='Video' href='https://drive.google.com/file/d/1FQHQveVwVQ_3IWxc932EIcJxxFuxZ34t/view'/>
        </li>
        <li>Allow indecisive couples to find their love through dining</li>
        <li>Narrow down interest to small local restaurants</li>
        <li>Help local restaurants receive business during the pandemic</li>
        <li>Technologies Used:</li>
          <ul>
            <li>Kotlin</li>
            <li>Location Services</li>
            <li>Google Place API</li>
            <li>Google Maps API</li>
          </ul>
      </ul>
    </div>
  )
}

export default Hexapawn;