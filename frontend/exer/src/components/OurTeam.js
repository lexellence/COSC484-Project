import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import OurTeamPicture from '../assets/team.jpg';

class OurTeam extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Our Team</h1>
          <p className="ourteam-subtitle"> 
          <b>
            Towson Univeristy
            Spring 2020
            COSC-484 Group 4
          </b>
          <br></br>
          <br></br>
          <img height="200" width="280" src={OurTeamPicture}></img>
          <div className="mt-4">
          <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title><b>Front-End Developers</b></Card.Title>
                  <Card.Text>
                    Haley Turfle, Mario Abdelsayed, Brenton Lim, Issac Tray, Matt King
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title><b>Back-End Developers</b></Card.Title>
                  <Card.Text>
                  David Leksen, Casey McCoy, Phillip Covell, Lawrence Chanaud Jr.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
            <p className="teammembers-subtitle">
            <b>David Leksen, </b><b>Haley Turfle, </b><b>Casey McCoy, </b><b>Brenton Lim, </b><b>Mario Abdelsayed, </b><b>Matt King, </b><b>Philip Covell, </b><b>Issac Tray, </b><b>Lawrence Chanaud Jr.</b>
            </p>
            <br></br>
          </div>
          </p>
        </Container>
      </div>
    );
  }
}
  
  export default OurTeam;
  