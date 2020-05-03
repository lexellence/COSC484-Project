import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

class SignIn extends Component {
    render(){
        return (
            <div>
                <Container fluid>
                    <Col fluid>
                        <Row className="d-flex align-items-center">
                            <h1>Sign In</h1>
                        </Row>
                        <Row className="d-flex align-items-center">
                            <Form className="mt-2">
                                <Form.Group controlId="username">
                                    <Form.Control
                                        className="input-field"
                                        name="username" type="text"
                                        placeholder="Username"
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your username
                                    </Form.Control.Feedback>
                                </Form.Group>
                
                                <Form.Group controlId="password">
                                    <Form.Control
                                        className="input-field"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your password.
                                    </Form.Control.Feedback>
                                    <a href="/">Forgot your password?</a>
                                </Form.Group>
                                
                                <Button variant="success" type="submit">Sign In</Button>
                            </Form>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default SignIn;
