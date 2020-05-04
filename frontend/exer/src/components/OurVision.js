import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import OurVisionPicture from '../assets/connections.jpg';

class OurVision extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Our Vision</h1>
          <p className="ourmission-subtitle">
          <img height="200" width="280" src={OurVisionPicture}></img>
          <div className="mt-4">
            The creators of EXER wish to help establish personal connections and encourage overall wellness (and to get a good grade on this project).
            <br></br>
          </div>
          </p>
        </Container>
      </div>
    );
  }
}
  
  export default OurVision;