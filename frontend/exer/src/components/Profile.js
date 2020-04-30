import React, { Component } from 'react';

function Profile() {
  return (
    <div>
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
}
export default Profile;