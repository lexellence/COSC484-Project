import React, { Component } from 'react';
import Nav from './components/Navbar.js';
import Landing from './components/Landing.js'
import About from './components/About.js';
import Contact from './components/Contact.js';
import Profile from './components/Profile.js';
import Trending from './components/Trending.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './dark-mode-v2.css'

//import postList from './posts/postList';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
          <Route path="/landing" component={Landing}>
              <Landing />
            </Route>
            <Route path="/about" component={About}>
              <About />
            </Route>
            <Route path="/contact" component={Contact}>
              <Contact />
            </Route>
            <Route path="/profile" component={Profile}>
              <Profile />
            </Route>
            <Route path="/trending" component={Trending}>
              <Trending />
            </Route>
            <Route path="/login" component={Login}>
              <Login />
            </Route>
            <Route path="/signup" component={SignUp}>
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
