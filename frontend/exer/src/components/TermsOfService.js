import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Service from '../assets/termsOfService.jpg';

class TermsOfService extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Terms of Service</h1>
          <p className="termsservice-subtitle">
          <img height="200" width="280" src={Service}></img>
          <div className="mt-4">
            <p className="termsservice-subtitle">
            
            </p>
            <br></br>
          </div>
          </p>
        </Container>
      </div>
    );
  }
}
  
  export default TermsOfService;
  