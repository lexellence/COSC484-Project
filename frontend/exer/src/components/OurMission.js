import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class OurMission extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Our Mission</h1>
          <div className="mt-4">
            <p className="ourmission-subtitle">
            Exers founders have a passion for fitness. Their goal in creating this site is to allow users to share their common interests and empower one another in maintaining a healthy lifestyle.
            </p>
            <br></br>
          </div>
        </Container>
      </div>
    );
  }
}
  
  export default OurMission;
  