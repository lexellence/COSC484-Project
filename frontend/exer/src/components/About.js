import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import diet from '../assets/diet.svg';
import application from '../assets/application.svg';
import goal from '../assets/goal.svg';


function About() {
  return (
    <div>
      <Container className="text-center mt-5 mb-5">
         <hr></hr>
        <h1>About Us</h1>
        <div className="mt-4">
          <p className="about-subtitle"> <b>EXER</b> is an interactive fitness application for training circuits, sharing results, and lifestyle tips. Track your fitness and share your progress with friends!</p>
          <br></br>
          <CardDeck>
          <Card>
            <Card.Img variant="top" src={goal} />
            <Card.Body>
              <Card.Title><b>Set Goals</b></Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"><div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a></div></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={application} />
            <Card.Body>
              <Card.Title><b>Learn Freely</b></Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"><div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a></div></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={diet} />
            <Card.Body>
              <Card.Title><b>Track Progress</b></Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"><div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a></div></small>
            </Card.Footer>
          </Card>
        </CardDeck>
        </div>
      </Container>
    </div>
  );
}

export default About;
