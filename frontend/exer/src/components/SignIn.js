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
			username: '',
			password: '',
			buttonDisabled: false
		};
	}

	async doLogin() {
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
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const {username, password} = this.state;
		return (
			<div>
				<Container>
					<Col fluid>
						<Row className="pt-5">
							<div className="mt-1 pl-5 pt-5">
								<Row className="mx-auto pt-5 pl-5">
									<h1>Sign In</h1><br />
								</Row>
								<Form className="mt-3">
									<Form.Group controlId="username">
										<Form.Control
											className="input-field"
											name="username"
											type="text"
											placeholder="Username"
											required />
									</Form.Group>

									<Form.Group controlId="password">
										<Form.Control
											className="input-field"
											name="password"
											type="password"
											placeholder="Password"
											required />
									</Form.Group>
									<div className="ml-3">
										<a className="pl-4" href="/">Forgot your password?</a><br />
									</div>
									<div className="pt-3 pl-4">
										<Button className="ml-5" variant="success" type="submit" onClick={() => this.doLogin()}>Sign In</Button>
									</div>
								</Form>
							</div>
						</Row>
					</Col>
				</Container>
			</div>
		);
	}
}

export default SignIn;
