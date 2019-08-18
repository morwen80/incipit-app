import React from 'react';
import app from '../base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <div className="container-fluid header">
      <nav >
        <NavLink activeClassName="is-active" to='/' exact={true} > <h1 className="brand">incipit</h1> </NavLink>
      </nav>
      <h2>&#123; A Writing Prompt Generator &#125;</h2>
      <button className="logoutBtn btn " onClick={() => app.auth().signOut()}>Logout <FontAwesomeIcon icon="sign-out-alt"/></button>
    </div>
  )
}

export default Header
