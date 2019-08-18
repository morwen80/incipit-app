import React from 'react';
import { Link } from 'react-router-dom';
import SinglePrompt from './SinglePrompt';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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
    <Container className="home">
      <div className="btns">
        <Button className="randomBtn" onClick={this.randomPrompt}>random prompt</Button>
        <Link to="/new"> <Button className="newBtn">add prompt</Button> </Link>
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
    </Container>
    )
  }
}

export default Home
