import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserStore from './UserStore.js';
import '../App.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: '',
            buttonDisabled: false
        }
    }

    setInputValue(property, value) {
        value = value.trim();

        if(value.length > 12){
            return;
        }

        this.setState({
            [property]: value
        })
    }

    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }

    async doLogin() {
        if(!this.state.username){
            return;
        }
        if(!this.state.password){
            return;
        }

        this.setState({
            buttonDisabled: true
        })

        try {
            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });

            let result = await res.json();
            if(result && result.success){
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            } else if (result && result.success === false){
                this.resetForm();
                alert(result.msg);
            }
        } catch (e) {
            console.log(e);
            this.resetForm();
        }
    }

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
                                        name="username"
                                        type="text"
                                        placeholder="Username"
                                        value={this.state.username ? this.state.username : ''}
                                        onChange={ (value) => this.setInputValue('username', value)}
                                        required />
                                </Form.Group>
                
                                <Form.Group controlId="password">
                                    <Form.Control
                                        className="input-field"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.password ? this.state.password : ''}
                                        onChange={ (value) => this.setInputValue('password', value)}
                                        required />
                                    <a href="/">Forgot your password?</a>
                                </Form.Group>
                                
                                <Button variant="success" type="submit" onClick={() => this.doLogin()}>Sign In</Button>
                            </Form>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default SignIn;
