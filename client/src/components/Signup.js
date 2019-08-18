import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../base';

import Button from 'react-bootstrap/Button';

const Signup = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push('/new')
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return(
    <div className="container signup">
      <h5>Welcome to INCIPIT.</h5>
      <hr />
      <h6>Please create an account to add your own writing prompt.</h6>


      <form onSubmit={handleSignUp}>
      <div className="form-group">
        <label> Email
          <input className="form-control" name="email" type="email" placeholder="email" />
        </label>
      </div>
      <div>
      <label> Password
        <input className="form-control" name="password" type="password" placeholder="password" />
      </label>
      </div>
      <Button type="submit" className="signupBtn">Sign Up</Button>
      </form>
    </div>
  )
}

export default withRouter(Signup)
