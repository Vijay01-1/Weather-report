import React from "react";
import { Container, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card className="p-4 shadow-lg border-0" style={{ maxWidth: "600px" }}>
        <Card.Body className="text-center">
          <h2 className="text-primary mb-4">About This App</h2>
          <p className="lead text-secondary">
            This student attendance management system helps educators track
            attendance efficiently.
          </p>
          <p className="text-muted lh-lg">
            Built using <strong>React</strong>, <strong>Bootstrap</strong>, and{" "}
            <strong>Node.js</strong>, it offers a seamless experience for
            managing student records.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
