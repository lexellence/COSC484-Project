import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import FaceBookPic from '../assets/facebook.jpg';
import SocialMeda1 from '../assets/socialmedia.jpg';
import SocialMedia2 from '../assets/socialmedia2.jpg';

class FaceBook extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>FaceBook</h1>
          <p className="facebook-subtitle">
                <img height="200" width="280" src={SocialMeda1}></img>
                <img height="200" width="280" src={FaceBookPic}></img>
                <img height="200" width="280" src={SocialMedia2}></img>
          <div className="mt-4">
            <p className="facebook-subtitle">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title><b>Keep up to date with our FaceBook page</b></Card.Title>
                  <Card.Text>
                    <a href="https://www.facebook.com/EXER-111118643923266/">EXER on FaceBook</a>
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
  
  export default FaceBook;
  