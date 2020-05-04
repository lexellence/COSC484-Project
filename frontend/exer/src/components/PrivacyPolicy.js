import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Privacy from '../assets/privacy.jpg';

class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>Privacy Policy</h1>
          <p className="privacypolicy-subtitle">
          <img height="200" width="280" src={Privacy}></img>
          <div className="mt-4">
            <p className="privacypolicy-subtitle">
            
            </p>
            <br></br>
          </div>
          </p>
        </Container>
      </div>
    );
  }
}
  
  export default PrivacyPolicy;
  