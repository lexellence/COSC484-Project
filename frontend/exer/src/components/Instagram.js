import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import InstagramPic from '../assets/instagram.jpg';

class Instagram extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Our Instagram</h1>
          <p className="instagram-subtitle">
          <img height="200" width="280" src={InstagramPic}></img>
          <div className="mt-4">
            <p className="instagram-subtitle">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title><b>Follow Us</b></Card.Title>
                  <Card.Text>
                    ________
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
  
  export default Instagram;
  