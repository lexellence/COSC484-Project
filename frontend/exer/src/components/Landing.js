import React, { Component } from 'react';
import FirstSlide from '../assets/person-holding-barbell-841130.jpg';
import SecondSlide from '../assets/jelmer-assink-gzeTjGu3b_k-unsplash.jpg';
import ThirdSlide from '../assets/person-holding-black-dumbbells-1032117.jpg';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './About.js'
import SignIn from './SignIn.js';
import '../App.css';

class Landing extends Component {
  render(){
    return (
      <div>
          <Container fluid>
              <Row className="mt-3 mb-3">
                  <Col>
                      <div className="container-shadow container-carousel" id="container-carousel">
                          <Carousel>
                              <Carousel.Item>
                                  <Image className="d-block w-100 h-25" src={FirstSlide} alt="First slide" rounded />
                                  <Carousel.Caption>
                                      <h3>Share Your Passion For Fitness</h3>
                                      <p></p>
                                  </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                  <Image className="d-block w-100" src={SecondSlide} alt="Second slide" rounded />
                                  <Carousel.Caption>
                                      <h3>Make Personal Connections</h3>
                                      <p></p>
                                  </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                  <Image className="d-block w-100" src={ThirdSlide} alt="Third slide" rounded />
                                  <Carousel.Caption>
                                      <h3>Stay Motivated</h3>
                                      <p></p>
                                  </Carousel.Caption>
                              </Carousel.Item>
                          </Carousel>
                      </div>
                  </Col>
                  <Col>
                      <div className="container-shadow container" id="container">
                          <div className="form-container">
                              <SignIn />
                          </div>
                          <div className="container-shadow overlay-container mr-md-3">
                              <div className="overlay">
                                  <div className="overlay-panel overlay-right">
                                      <h1>Welcome Back!</h1>
                                      <p className="landing-login">
                                        <b>To keep connected with us please login.</b>
                                      </p>
                                      <p>Don't have an account yet?</p>
                                      <a href='/SignUp'><button className="ghost" id="signUp">Sign Up</button></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <About />
          </Container>
      </div>
    );
  }
};

export default Landing;
