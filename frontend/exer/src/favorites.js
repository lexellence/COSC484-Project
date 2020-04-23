import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './DarkMode.css'

import postList from './posts/postList';

class App extends Component {
  render() {
  return (//from template.html
    <div className="Favorites">

      <div className="favicon"><link rel="icon" href="EXERFavicon.ico" type="image/x-icon" /></div>
      <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
        </label>
        <em>Dark Mode</em>
      </div>  
      <div className="headerandfooterScripts">
      <script src="DarkMode.js"></script>
        <script lang="javascript" type="text/javascript" src="header.js"></script>
        <script lang="javascript" type="text/javascript" src="footer.js"></script>
      </div>

    </div>
  );
}//end render()
}//end component()
export default App;
