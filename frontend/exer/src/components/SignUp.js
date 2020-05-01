import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function SignUp() {
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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
            <Row>
              <Form.Group as={Col} controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" required />
                <Form.Control.Feedback type="invalid">
                  First name required.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" required />
                <Form.Control.Feedback type="invalid">
                  Last name required.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            {/* GetBirthdate MM/DD/YYYY*/}
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" required />
              <Form.Control.Feedback type="invalid">
                  Username required.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" required />
              <Form.Control.Feedback type="invalid">
                  Email address required.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group controlId="confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" required />
            </Form.Group>
            <Form.Group>
            <Form.Label>Upload Profile Picture</Form.Label>
              <Form.File 
                id="profile-picture"
                label="Profile Picture"
                custom
              />
            </Form.Group>
            <Button variant="success" type="submit">Register</Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
