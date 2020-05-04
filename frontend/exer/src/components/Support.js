import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Contact from '../assets/support.jpg';
import '../App.css';

function Support() {
  return (
    <div>
      <Container className="mt-3 mb-3" fluid>
        <h1 className="text-center">Need help?</h1>
        <Container className="text-center mt-5 mb-5">
        <img height="200" width="280" src={Contact}></img>
        </Container>
        <Col className="mt-0">
            <p className="text-center">Fill out the contact form and let us know how we can help.</p>
              <Form className="">
                <Form.Group as={Row} controlId="name">
                  <Form.Label column sm={1}>Name</Form.Label>
                  <Col sm={5}>
                    <Form.Control className="input-field" type="text" placeholder="Name" required />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="email">
                  <Form.Label column sm={1}>Email</Form.Label>
                  <Col sm={5}>
                    <Form.Control className="input-field" type="email" placeholder="Email Address" required />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="subject">
                  <Form.Label column sm={1}>Subject</Form.Label>
                  <Col sm={5}>
                    <Form.Control className="input-field" as="select">
                      <option value="Feedback">Feedback</option>
                      <option value="Technical Issue">Technical Issue</option>
                      <option value="General Question">General Question</option>
                    </Form.Control>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="message">
                  <Form.Label column sm={1}>Message</Form.Label>
                  <Col sm={5}>
                    <Form.Control className="input-field overflow-auto" as='textarea' type="text" rows='5' placeholder="Message" required/>
                  </Col>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Col>
            <br></br>
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center"><b>Find Us</b></Card.Title>
                  <Card.Text className="text-center">
                    Towson University 8000 York Rd.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center"><b>Call Us</b></Card.Title>
                  <Card.Text className="text-center">
                    410-000-0000
                  </Card.Text>
                </Card.Body>
              </Card>
              </CardDeck>
      </Container>
    </div>
  );
}

export default Support;
