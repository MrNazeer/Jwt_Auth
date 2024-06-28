import React, {useContext, useState} from "react";
import {Container, Card, Button, Form} from "react-bootstrap";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const {user, login} = useContext(AuthContext);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    await login(userData.email, userData.pass);
    console.log("result", user ? user.data.email : user);
    navigate("/home");
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

  // if (user !== null) {
  //   if (user.data.email) {
  //     navigate("/home");
  //   }
  // }

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
