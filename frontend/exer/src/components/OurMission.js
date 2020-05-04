import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import OurMissionPicture from '../assets/connect.jpg';

class OurMission extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Our Mission</h1>
          <p className="ourmission-subtitle">
          <img height="200" width="280" src={OurMissionPicture}></img>
          <div className="mt-4">
            <p className="ourmission-subtitle">
            EXER's founders have a passion for fitness. Their goal in creating this site is to allow users to share their common interests and empower one another in maintaining a healthy lifestyle.
            </p>
            <br></br>
          </div>
          </p>
        </Container>
      </div>
    );
  }
}
  
  export default OurMission;
  