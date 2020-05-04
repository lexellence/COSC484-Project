import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import TwitterPic from '../assets/twitter.jpg';
import SocialMeda1 from '../assets/socialmedia.jpg';
import SocialMedia2 from '../assets/socialmedia2.jpg';

class Twitter extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Twitter</h1>
          <p className="twitter-subtitle">
                <img height="200" width="280" src={SocialMeda1}></img>
                <img height="200" width="280" src={TwitterPic}></img>
                <img height="200" width="280" src={SocialMedia2}></img>
          <div className="mt-4">
            <p className="twitter-subtitle">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title><b>Keep to date by following us on Twitter</b></Card.Title>
                  <Card.Text>
                  <a href="https://twitter.com/EXER83828318">EXER on Twitter</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
            </p>
            <br></br>
          </div>
          </p>
        </Container>
      </div>
    );
  }
}
  
  export default Twitter;
  