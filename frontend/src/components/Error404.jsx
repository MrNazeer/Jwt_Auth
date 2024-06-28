import React from "react";
import {Container, Card, Button, Form} from "react-bootstrap";
export default function Error404() {
  return (
    <Container style={{minHeight: "100vh"}} className="d-flex align-items-center justify-content-center">
      <Card style={{width: "25rem", minHeight: "25rem"}} className="d-flex align-items-center justify-content-center">
        <Card.Title>Error 404</Card.Title>
      </Card>
    </Container>
  );
}
