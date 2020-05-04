import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Contact from '../assets/support.jpg';

class ContactSupport extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Contact Support</h1>
          <p className="contactsupport-subtitle">
          <img height="200" width="280" src={Contact}></img>
          <div className="mt-4">
            <p className="contactsupport-subtitle">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title><b>Find Us</b></Card.Title>
                  <Card.Text>
                    Towson University 8000 York Rd.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title><b>Call Us</b></Card.Title>
                  <Card.Text>
                    410-000-0000
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title><b>E-mail Us</b></Card.Title>
                  <Card.Text>
                    COSC484GroupProject@towson.edu
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
  
  export default ContactSupport;
  