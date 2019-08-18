import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import AddPrompt from './components/AddPrompt';
import Header from './components/Header';


const App = () => {
  return (
    <AuthProvider>
    <Router>
    <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path='/new' component={AddPrompt} />

    </Router>
    </AuthProvider>
  );
}

export default App;
