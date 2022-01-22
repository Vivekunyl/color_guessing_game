import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Period from './components/Period.jsx';
import Mine from './components/Mine.jsx';
import Navbar from './components/Navbar.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';

import './App.css';

function App() {
  return (
    <>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/period">
            <Period />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/mine">
            <Mine />
          </Route>
          <Navbar/>
    </>
  );
}

export default App;
