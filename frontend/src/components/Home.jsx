import React from "react";
import {Container, Card, Button, Form} from "react-bootstrap";

export default function Home() {
  return (
    <Container style={{minHeight: "100vh"}} className="d-flex align-items-center justify-content-center">
      <Card style={{width: "25rem", minHeight: "25rem"}} className="d-flex align-items-center justify-content-center">
        <Card.Title>Home</Card.Title>
      </Card>
    </Container>
  );
}
