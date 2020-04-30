import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

function Contact() {
  return (
    <div>
      <ReactBootstrap.Container fluid>
        <ReactBootstrap.Row className="justify-content-md-center">
          <ReactBootstrap.Col md={5}>
            <h1>Contact Us</h1>
            <p>Having technical difficulties? Want us send us feedback?</p>
            <div className="container">
              <ReactBootstrap.Form>
                <ReactBootstrap.Row>
                  <ReactBootstrap.Col>
                    <ReactBootstrap.Form.Group controlId="name">
                        <ReactBootstrap.Form.Label>Name</ReactBootstrap.Form.Label>
                        <ReactBootstrap.Form.Control type="text" placeholder="Name" />
                    </ReactBootstrap.Form.Group>
                  </ReactBootstrap.Col>
                  <ReactBootstrap.Col>
                    <ReactBootstrap.Form.Group controlId="email">
                      <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
                      <ReactBootstrap.Form.Control type="email" placeholder="Email" />
                    </ReactBootstrap.Form.Group>
                  </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Form.Group controlId="subject">
                    <ReactBootstrap.Form.Label>Subject</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="text" placeholder="Subject" />
                </ReactBootstrap.Form.Group>
                <ReactBootstrap.Form.Group controlId="message">
                    <ReactBootstrap.Form.Label>Message</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="text" placeholder="Message" />
                </ReactBootstrap.Form.Group>
                <ReactBootstrap.Button variant="primary" type="submit">Submit</ReactBootstrap.Button>
              </ReactBootstrap.Form>
            </div>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </ReactBootstrap.Container>
    </div>
  );
}

export default Contact;
