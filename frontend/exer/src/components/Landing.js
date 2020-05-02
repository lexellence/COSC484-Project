import React from 'react';
import FirstSlide from '../assets/person-holding-barbell-841130.jpg';
import SecondSlide from '../assets/jelmer-assink-gzeTjGu3b_k-unsplash.jpg';
import ThirdSlide from '../assets/person-holding-black-dumbbells-1032117.jpg';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './About.js'
import '../App.css';

function Landing() {
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
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="d-block w-100" src={SecondSlide} alt="Second slide" rounded />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="d-block w-100" src={ThirdSlide} alt="Third slide" rounded />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>To keep connected with us please login with your personal info</p>
                                    <button className="ghost" id="signIn">Sign In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Hello, Friend!</h1>
                                    <p>Enter your personal details and start journey with us</p>
                                    <button className="ghost" id="signUp">Sign Up</button>
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
};

function SignIn() {
    const [validated, setValidated] = React.useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <div>
        <Container fluid>
          <Col fluid>
            <Row className="d-flex align-items-center">
              <h1>Sign In</h1>
            </Row>
            <Row className="d-flex align-items-center">
              <Form className="mt-2" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Control className="input-field" type="text" placeholder="Username" required />
                  <Form.Control.Feedback type="invalid">
                    Please enter your username
                  </Form.Control.Feedback>
                </Form.Group>
  
                <Form.Group controlId="password">
                  <Form.Control className="input-field" type="password" placeholder="Password" required />
                  <Form.Control.Feedback type="invalid">
                    Please enter your password.
                  </Form.Control.Feedback>
                  <a href="#">Forgot your password?</a>
                </Form.Group>
                
                <Button variant="success" type="submit">Sign In</Button>
              </Form>
            </Row>
          </Col>
        </Container>
      </div>
    );
}

function SignUp() {
    const [validated, setValidated] = React.useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <div>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
              <Row>
                <Form.Group as={Col} controlId="firstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control className="input-field" type="text" placeholder="First Name" required />
                  <Form.Control.Feedback type="invalid">
                    First name required.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="lastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control className="input-field" type="text" placeholder="Last Name" required />
                  <Form.Control.Feedback type="invalid">
                    Last name required.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control className="input-field" type="text" placeholder="Username" required />
                <Form.Control.Feedback type="invalid">
                    Username required.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control className="input-field" type="email" placeholder="Email Address" required />
                <Form.Control.Feedback type="invalid">
                    Email address required.
                  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control className="input-field" type="password" placeholder="Password" required />
              </Form.Group>
              <Button variant="success" type="submit">Register</Button>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }

export default Landing;
