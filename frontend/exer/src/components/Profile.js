import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import DemoPicture from '../assets/demo-profile-picture.png';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Profile() {
  return (
    <div>
        <Container>
        <br></br>
                <br></br>
            <Row><h1>Hi, USER</h1></Row>
            <Row>
                
            </Row>
        </Container>
        <Container>
                <br></br>
        <Card style={{ width: '18rem',
         margin: 'auto',
         border: '3px  solid clear',
         padding: '10px' }}>
  <Card.Img variant="top" src={DemoPicture} />
  <Card.Body>
    <Card.Title>User Name</Card.Title>
    <Card.Text>
    User bio will go here
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>Account</ListGroup.Item>
    <ListGroup.Item>Information</ListGroup.Item>
    <ListGroup.Item>Listed</ListGroup.Item>
    <ListGroup.Item>here</ListGroup.Item>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Edit Account Information</Card.Link>
  </Card.Body>
</Card>
<br></br>
<br></br>
        </Container>
        <Tabs defaultActiveKey="my-posts" id="uncontrolled-tab-example">
            <Tab eventKey="my-posts" title="My Posts">
                <MyPosts />
            </Tab>
            <Tab eventKey="favorites" title="Favorites">
                <Favorites />
            </Tab>
            <Tab eventKey="edit-profile" title="Edit Profile">
                <EditProfile />
            </Tab>
        </Tabs>
    </div>
  );
}

function EditProfile(){
    return(
        <div>
        
        </div>
    );
}

function MyPosts(){
    return(
        <div>
            <br></br>
              <Card style={{ width: '30rem',
         margin: 'auto',
         border: '3px  solid clear',
         padding: '10px' }}>
                <Card.Img variant="top" src={DemoPicture} />
                <br></br>
                <Card.Title>Username</Card.Title>
                <Card.Body>
                    <Card.Text>
                        Post description
                    </Card.Text>
                </Card.Body>
                </Card>
                <br></br>
        </div>
    );
}

function Favorites(){
    return(
        <div>
            
        </div>
    );
}

export default Profile;
