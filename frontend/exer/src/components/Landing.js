import React from 'react';
import FirstSlide from '../assets/person-holding-barbell-841130.jpg';
import SecondSlide from '../assets/jelmer-assink-gzeTjGu3b_k-unsplash.jpg';
import ThirdSlide from '../assets/person-holding-black-dumbbells-1032117.jpg';
import FourthSlide from '../assets/samuel-girven-VJ2s0c20qCo-unsplash.jpg';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

function Landing() {
  return (
    <div>
        <Container fluid>
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
        </Container>
    </div>
  );
};

export default Landing;
