import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="mt-5 pt-5 text-left">
      <h1 className="text-primary fw-bold">Welcome to the Attendance App</h1>
      <p className="text-secondary fs-5">Manage student attendance easily and efficiently.</p>
      <Link to="/attendance">
        <Button variant="primary" className="mt-3 px-4 py-2">Take Attendance</Button>
      </Link>
    </Container>
  );
};

export default Home;
