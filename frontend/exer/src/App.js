import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import postList from './posts/postList';

class App extends Component {
  render() {
  return (//from template.html
    <div className="App">
      
      <div className="theme-switch-wrapper">
        <label className="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
        </label>
        <em>Dark Mode</em>
      </div>

      <div className="headerScript">
        <script src="DarkMode.js"></script>
        <script lang="javascript" type="text/javascript" src="header.js"></script>
      </div>
    
      <div className="imgbox">
        <img className="center-fit" src="homepageGraphic.jpg" alt="EXER Homepage Collage Graphic"/>
      </div>

      <div className="footerScript">
        <script lang="javascript" type="text/javascript" src="footer.js"></script>
      </div>

    </div>
  );
}//end render()
}//end component()
export default App;
