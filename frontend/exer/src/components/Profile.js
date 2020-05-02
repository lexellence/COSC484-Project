import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import DemoPicture from '../assets/demo-profile-picture.png';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile() {
  return (
    <div>
        <Container>
            <Row><h1>Hi, USER</h1></Row>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={DemoPicture} alt="Profile Picture" style={{height: 150, width: 150}} roundedCircle/>
                </Col>
            </Row>
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
