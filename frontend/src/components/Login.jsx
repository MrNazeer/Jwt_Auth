import React, {useState} from "react";
import {Container, Card, Button, Form} from "react-bootstrap";

export default function Login() {
  const [userData, setuserData] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setuserData({
      email: "",
      pass: "",
    });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setuserData({
      email: "",
      pass: "",
    });
  };

  return (
    <Container style={{minHeight: "100vh"}} className="d-flex align-items-center justify-content-center">
      <Card style={{width: "25rem"}}>
        <Form className="px-4 py-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" value={userData.email} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="pass" placeholder="Password" value={userData.pass} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="warning" className="ms-3" type="clear" onClick={handleClear}>
              clear
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}
