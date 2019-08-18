import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SinglePrompt = (props) => {
  const { incrementLike, prompt } = props

  return(
    <div className="singlePrompt">
      <button id="likeIcon" onClick={ () => incrementLike(prompt)}><FontAwesomeIcon icon="heart"/></button>
      <p>{prompt.prompt}</p>
      <hr />
      <button id="userIcon"><FontAwesomeIcon icon="user"/></button>{prompt.writer}
      <span className="likesNum">{prompt.likes} likes</span>
  </div>
  )
}

export default SinglePrompt
