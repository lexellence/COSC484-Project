import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import diet from '../assets/diet.svg';
import application from '../assets/application.svg';
import goal from '../assets/goal.svg';

class About extends Component {
  render() {
    return (
      <div>
        <Container className="text-center mt-5 mb-5">
          <hr></hr>
          <h1>About Us</h1>
          <div className="mt-4">
            <p className="about-subtitle">
              <b>EXER</b> is an interactive fitness application for training circuits, sharing results, and lifestyle tips. Track your fitness and share your progress with friends!
            </p>
            <br></br>
            <CardDeck>
              <Card>
                <Card.Img style={{marginTop: 20}} variant="top" src={goal} />
                <Card.Body>
                  <Card.Title><b>Set Goals</b></Card.Title>
                  <Card.Text>
                    Ever wanted to hit that PR? Set a goal and we'll help you get there. We fine-tune workout circuits just for you.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img style={{marginTop: 20}} variant="top" src={application} />
                <Card.Body>
                  <Card.Title><b>Learn Freely</b></Card.Title>
                  <Card.Text>
                      Track your stats, progress, and goals from your phone (Coming soon!). Follow your favorite influencer or compete with friends!
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img style={{marginTop: 20}} variant="top" src={diet} />
                <Card.Body>
                  <Card.Title><b>Track Progress</b></Card.Title>
                  <Card.Text>
                    We help tailor your fitness journey for your needs and make it easy to get the most accurate results.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
