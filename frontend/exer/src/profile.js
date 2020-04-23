import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './DarkMode.css'

import postList from './posts/postList';

class App extends Component {
  render() {
  return (//from template.html
    <div className="Profile">

        <div className="favicon"><link rel="icon" href="EXERFavicon.ico" type="image/x-icon" /></div>
        <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div class="slider round"></div>
        </label>
        <em>Dark Mode</em>
        </div>

        <div className="headerScript">
            <script src="DarkMode.js"></script>
            <script lang="javascript" type="text/javascript" src="header.js"></script>
        </div>

  

        <div id="topMenu">
            <h1>Profile</h1><br/><br/>

            <table id="profileInfo">
            <tbody>
                <tr>
                <td rowspan="2"> <img src="exampleavatar.jpg" alt="avatar"/> </td>
                <td colspan="2"> UserName </td>
                </tr>
                <tr>
                <td> FirstName</td>
                <td> LastName </td>
                </tr>
            </tbody>
            </table>
            <table id="bioInfo">
            <tbody>
                <tr>
                <td> Workout Level:</td>
                <td> Beginner</td>
                </tr>
                <tr>
                <td colspan="2"> Example BIO info.</td>
                </tr>
            </tbody>
            </table>

            <br/>

            <a href="profilePage-POSTS.html">Posts</a>
            <a href="profilePage-COMPLETED.html">Completed Workouts</a>
            <a href="profilePage-BIOTRACK.html">Progress</a>
        </div>

        <div className="footerScript">
            <script lang="javascript" type="text/javascript" src="footer.js"></script>
        </div>

    </div>
  );
}//end render()
}//end component()
export default App;