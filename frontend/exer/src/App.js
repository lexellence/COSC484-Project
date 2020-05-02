import React, { Component } from 'react';
import Nav from './components/Navbar.js';
import Landing from './components/Landing.js'
import Support from './components/Support.js';
import Profile from './components/Profile.js';
import Trending from './components/Trending.js';
import Footer from './components/Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css'

class App extends Component {
  render(){
    return (
      <div>
        <Router>
          <Route exact path="/" render={() => (
            <Redirect to="/Landing"/>
          )}/>
          <div>
            <Nav />
            <Switch>
              <Route path="/Landing" component={Landing}>
                <Landing />
              </Route>
              <Route path="/Support" component={Support}>
                <Support />
              </Route>
              <Route path="/Profile" component={Profile}>
                <Profile />
              </Route>
              <Route path="/Trending" component={Trending}>
                <Trending />
              </Route>
            </Switch>
          </div>
          <div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
