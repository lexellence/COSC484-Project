import React, { Component } from 'react';
import Nav from './components/Navbar.js';
import Row from 'react-bootstrap/Row';
import Landing from './components/Landing.js'
import Support from './components/Support.js';
import Profile from './components/Profile.js';
import Trending from './components/Trending.js';
import Feed from './components/Feed.js';
import Footer from './components/Footer.js';
import UserStore from './components/UserStore.js';
import Spinner from 'react-bootstrap/Spinner';
import { observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css'
import { Container } from 'react-bootstrap';

class App extends Component {
  async componentDidMount(){
    try {
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout(){
    try {
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success){
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    } catch (e) {
      console.log(e);
    }
  }

  render(){
    if(UserStore.loading){ //Checking if user is logged in
        return (
          <div>
            <Router>
              <Nav />
              <Container>
                <Row className="justify-content-md-center">
                  <Spinner animation="grow" variant="primary" size="lg">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </Row>
              </Container>
              <Footer />
            </Router>
          </div>
        );
    } else {
      if(UserStore.isLoggedIn){
        return(
          <div>
            <Router>
              <Route exact path="/" render={() => (
                <Redirect to="/Profile"/>
              )}/>
              <div>
                <Nav />
                <Switch>
                  <Route path="/Feed" component={Feed}>
                    <Feed />
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
            </Router>
          </div>
        );
      } else {
        return ( //Returned when user is not logged in
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
              <Footer />
            </Router>
          </div>
        );
      }
    }
  }
}

export default observer(App);
