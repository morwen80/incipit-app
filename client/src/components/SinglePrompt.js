import React from 'react';

const SinglePrompt = (props) => {
  const { incrementLike, prompt } = props

  return(
    <div className="singlePrompt">
      <button onClick={ () => incrementLike(prompt)}><i className="fas fa-heart"></i></button>
      <p>{prompt.prompt}</p>
      <hr />
      <i className="fas fa-user"></i>{prompt.writer}
      <span className="likesNum">{prompt.likes} likes</span>
  </div>
  )
}

export default SinglePrompt
