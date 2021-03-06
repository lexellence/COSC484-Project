import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

class SignUp extends Component {
    constructor(props) {
		super(props);
		this.state = {
			username: '',
            password: '',
            username: '',
            email: '',
            password: '',
		};
    }
    
    async register() {
		try {
			let res = await fetch('/register', {
				method: 'post',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    username: this.state.username,
                    email: this.state.email,
					password: this.state.password
				})
			});
		} catch (e) {
			console.log(e);
		}
	}
    render() {
        return (
            <div>
                <Container className="mt-5 mb-5" fluid>
                    <Row className="justify-content-md-center">
                        <Form autoComplete="off">
                            <h1>Sign Up</h1><br />
                            <Row>
                                <Form.Group as={Col} controlId="firstname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        className="input-field"
                                        name="firstname"
                                        type="text"
                                        placeholder="First Name"
                                        required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="lastname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        className="input-field"
                                        name="lastname"
                                        type="text"
                                        placeholder="Last Name"
                                        required />
                                </Form.Group>
                            </Row>

                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    className="input-field"
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    required />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    className="input-field"
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    required />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    className="input-field"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required />
                            </Form.Group>

                            <Button variant="success" type="submit" onClick={() => this.register()}>Register</Button>
                        </Form>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SignUp;