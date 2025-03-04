import React, { useState } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";

const Student = ({ data, addStudent }) => {
  const [newStudent, setNewStudent] = useState({ regno: "", name: "" });

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if Reg No already exists
    if (data.some((student) => student.regno === newStudent.regno)) {
      alert("Reg No already exists!");
      return;
    }

    if (newStudent.regno && newStudent.name) {
      const studentWithSno = {
        sno: data.length + 1, // Auto-generate S.No
        ...newStudent
      };
      addStudent(studentWithSno);
      setNewStudent({ regno: "", name: "" }); // Reset form
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-primary">Student List</h2>
      <Table striped bordered hover responsive className="shadow-sm rounded">
        <thead className="text-center bg-light">
          <tr>
            <th>S.No</th>
            <th>Reg No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.regno}>
              <td>{student.sno}</td>
              <td>{student.regno}</td>
              <td>{student.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Student Form */}
      <h3 className="mt-4">Add New Student</h3>
      <Form onSubmit={handleSubmit} className="p-3 shadow-sm rounded bg-light">
        <Form.Group className="mb-3">
          <Form.Label>Reg No</Form.Label>
          <Form.Control
            type="number"
            name="regno"
            value={newStudent.regno}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="success" type="submit">Add Student</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Student;
