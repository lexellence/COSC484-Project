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
                Ever wanted to hit that PR? Set a goal and we'll help you get there. We fine-tune workout circuits just for you.
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
                  Track your stats, progress, and goals from your phone (soon). Follow your favorite influencer or compete with friends!
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
                We tailor your fitness journey for your needs and make it easy to get the most  accurate results.
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
