import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Login() {
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={3}>
          <h1>Log In</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" required />
                <Form.Control.Feedback type="invalid">
                  Please enter your username
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
                <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="success" type="submit">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
