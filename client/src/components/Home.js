import React from 'react';
import { Link } from 'react-router-dom';
import SinglePrompt from './SinglePrompt'

class Home extends React.Component {
 state = {
   hello: "Writer block? We hear ya! With INCIPIT you can generate a random prompt to inspire you or add your own prompt to help other writers out.",
   prompt: []
 }

randomPrompt = (e) => {
  e.preventDefault();
  fetch('http://localhost:4000/prompts')
  .then(resp => resp.json())
  .then(data => this.setState({
    prompt: data[Math.floor(Math.random() * data.length)],
    hello: ""
    })
  )
}

incrementLike = (prompt) => {
  prompt.likes = prompt.likes+1
  this.updatePrompt({...prompt});
}

updatePrompt = (prompt) => {
  fetch(`http://localhost:4000/prompts/${prompt._id}`, {
    method: 'PUT',
    headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
  body: JSON.stringify( prompt )
})
  .then(resp => resp.json())
  .then(data => this.setState({ prompt: prompt}))
}

render(){
  return(
    <div className="home container">
      <div className="btns">
        <button className="random btn" onClick={this.randomPrompt}>random prompt</button>
        <Link to="/new"> <button className="btn newBtn">add prompt</button> </Link>
      </div>
        <div className="main">
          <div className="promptSpace">
            {this.state.hello === "" ?

            <SinglePrompt
              prompt={this.state.prompt}
              incrementLike={this.incrementLike}
              updatePrompt={this.updatePrompt}
            /> :
          this.state.hello
          }
          </div>
        </div>
    </div>
    )
  }
}

export default Home
