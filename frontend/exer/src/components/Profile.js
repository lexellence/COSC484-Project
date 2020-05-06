import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import DemoPicture from '../assets/demo-profile-picture.png';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Profile() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Container className="mt-5">
                <Row><h1>Hi, testUser</h1></Row>
            </Container>
            <Container className="mt-1 mb-3 d-flex justify-content-start">
                <Card style={{ width: '18rem',
                        margin: 'auto',
                        border: '3px  solid clear',
                        padding: '10px' }}>
                    <Card.Img variant="top" src={DemoPicture} />
                    <Card.Body>
                        <Card.Text>bio</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>name</ListGroup.Item>
                        <ListGroup.Item>followers</ListGroup.Item>
                        <ListGroup.Item>following</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="link" onClick={handleShow}>Edit Profile</Button>
                    </Card.Body>
                </Card>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form className="ml-2 mr-2">
                    <Form.Group as={Row} controlId="bio">
                            <Form.Label column sm={3}>Bio</Form.Label>
                            <Col>
                                <Form.Control className="input-field" type="text" placeholder="Bio" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="fistname">
                            <Form.Label column sm={3}>First Name</Form.Label>
                            <Col>
                                <Form.Control className="input-field" type="text" placeholder="First Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="lastname">
                            <Form.Label column sm={3}>Last Name</Form.Label>
                            <Col>
                                <Form.Control className="input-field" type="text" placeholder="Last Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="username">
                            <Form.Label column sm={3}>Username</Form.Label>
                            <Col>
                                <Form.Control className="input-field" type="text" placeholder="Username" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="email">
                            <Form.Label column sm={3}>Email</Form.Label>
                            <Col>
                                <Form.Control className="input-field" type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save changes</Button>
                </Modal.Footer>
            </Modal>

            <Tabs defaultActiveKey="my-posts">
                <Tab eventKey="my-posts" title="My Posts">
                    <MyPosts />
                </Tab>
                <Tab eventKey="favorites" title="Favorites">
                    <Favorites />
                </Tab>
            </Tabs>
        </div>
    );
}

function MyPosts(){
    return(
        <Container className="mt-4 mb-5">
              <Card style={{ width: '30rem',
                    margin: 'auto',
                    border: '3px  solid clear',
                    padding: '10px' }}>
                <Card.Img variant="top" src={DemoPicture} />
                    <Card.Title className="pl-2">post.title</Card.Title>
                    <Card.Body>
                        <Card.Text>
                            post.body
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
    );
}

function Favorites(){
    return(
        <Container className="mt-4 mb-5">
              <Card style={{ width: '30rem',
                    margin: 'auto',
                    border: '3px  solid clear',
                    padding: '10px' }}>
                <Card.Img variant="top" src={DemoPicture} />
                    <Card.Title className="pl-2">post.title</Card.Title>
                    <Card.Body>
                        <Card.Text>
                            post.body
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
    );
}

export default Profile;
