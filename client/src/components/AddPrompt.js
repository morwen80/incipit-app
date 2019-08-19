import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class AddPrompt extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newP: '',
      writer: 'Anonymous'
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addNewPrompt = (e) => {
    e.preventDefault();
    const newPrompt = {
      prompt: this.state.newP,
      writer: this.state.writer,
      likes: 1
    }
    fetch("/prompts", {
      method: 'POST',
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
    body: JSON.stringify(newPrompt)
  })
    .then(resp => resp.json())
    .then(this.props.history.push('/'))
  }

  render(){
    return(
      <Container className="newPrompt">
          <form onSubmit={this.addNewPrompt}>
          <div className="form-group">

            <label> Add your prompt </label>
            <textarea
              name="newP"
              className="form-control"
              value={this.state.newP}
              onChange={this.handleChange}
            />
          </div>
          <div>
          <label>Writer
            <input
              className="form-control input-lg"
              name="writer"
              placeholder="writer"
              value={this.state.writer}
              onChange={this.handleChange}
            />
          </label>
          </div>
            <Button type="submit" className="btn newPromptBtn">submit</Button>
          </form>

      </Container>
    )
  }
}

export default AddPrompt
