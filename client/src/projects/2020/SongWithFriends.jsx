import React from "react";
import '../../pagesCSS/Projects.css';

const SongWithFriends = () => {
  return (
    <div className='projectInfo'>
      <h2 className='projectTitle'>Song With Friends (May 2020 - Jun 2020)</h2>
      <ul className='projectBody'>
        <li>Listen simultaneously with friends through the web browser</li>
        <li>Queues up to 5 songs using Spotify Web API </li>
        <li>Implemented a chat feature for friends to communicate through room/user IDs</li>
        <li>Technologies Used:</li>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Google Sign-In</li>
            <li>Spotify API</li>
          </ul>
      </ul>
    </div>
  )
}

export default SongWithFriends;