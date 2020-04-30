import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={5}>
            <h1>Contact Us</h1>
            <p>Having technical difficulties? Want us send us feedback?</p>
            <div className="container">
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' type="text" rows='5' placeholder="Your Message" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
