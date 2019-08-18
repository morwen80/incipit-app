import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SinglePrompt = (props) => {
  const { incrementLike, prompt } = props

  return(
    <div className="singlePrompt">
      <button onClick={ () => incrementLike(prompt)}><FontAwesomeIcon icon="heart"/></button>
      <p>{prompt.prompt}</p>
      <hr />
      <FontAwesomeIcon icon="user"/>{prompt.writer}
      <span className="likesNum">{prompt.likes} likes</span>
  </div>
  )
}

export default SinglePrompt
