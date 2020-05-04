import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import InstagramPic from '../assets/instagram.jpg';
import SocialMeda1 from '../assets/socialmedia.jpg';
import SocialMedia2 from '../assets/socialmedia2.jpg';

class Instagram extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Instagram</h1>
          <p className="instagram-subtitle">
            <br></br>
                <img height="200" width="280" src={SocialMeda1}></img>
                <img height="200" width="280" src={InstagramPic}></img>
                <img height="200" width="280" src={SocialMedia2}></img>
          <br></br>
          <div className="mt-4">
            <p className="instagram-subtitle">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title><b>Follow Us</b></Card.Title>
                  <Card.Text>
                  <a href="https://www.instagram.com/exerwellness/">EXER on Instagram</a>
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
  