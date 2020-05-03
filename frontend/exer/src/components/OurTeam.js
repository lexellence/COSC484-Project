import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class OurTeam extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Our Team</h1>
          <p className="ourteam-subtitle">
            Towson Univeristy
            Spring 2020
            COSC-484 Group 4
          </p>
          <h2>Team Members</h2>
          <div className="mt-4">
            <p className="teammembers-subtitle">
            <b>David Leksen, </b><b>Haley Turfle, </b><b>Casey McCoy, </b><b>Brenton Lim, </b><b>Mario Abdelsayed, </b><b>Matt King, </b><b>Phillip Covell, </b><b>Issac Tray, </b><b>Lawrence Chanaud Jr.</b>
            </p>
            <br></br>
          </div>
        </Container>
      </div>
    );
  }
}
  
  export default OurTeam;
  