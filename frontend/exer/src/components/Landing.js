import React from 'react';
import FirstSlide from '../assets/person-holding-barbell-841130.jpg';
import SecondSlide from '../assets/jelmer-assink-gzeTjGu3b_k-unsplash.jpg';
import ThirdSlide from '../assets/person-holding-black-dumbbells-1032117.jpg';
import FourthSlide from '../assets/samuel-girven-VJ2s0c20qCo-unsplash.jpg';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import '../App.css';

function Landing() {
  return (
    <div>
        <Container fluid>
            <div className = "container-carousel" id="container-carousel">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 h-25 mt-3" src={FirstSlide} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={SecondSlide} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={ThirdSlide} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={FourthSlide} alt="Fourth slide" />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="container" id="container">
            <div className="form-container sign-up-container">
                <SignUp />
        </div>
        <div className="form-container">
                <Login />
        </div>
        <div className="overlay-container">
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
        </Container>
    </div>
  );
};

export default Landing;
