import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const Attendance = ({ students, handleAttendance }) => {
  const [attendance, setAttendance] = useState(new Map());

  const markAttendance = (sno, status) => {
    setAttendance((prev) => {
      const updatedAttendance = new Map(prev);
      updatedAttendance.set(sno, status);
      return updatedAttendance;
    });
  };

  const submitAttendance = () => {
    handleAttendance(Array.from(attendance, ([sno, status]) => ({ sno, status })));
  };

  return (
    <Container className="mt-5">
      <h2 className="text-primary mb-4">Mark Attendance</h2>
      <Table striped bordered hover responsive className="shadow rounded">
        <thead className="text-center bg-light">
          <tr>
            <th>S.No</th>
            <th>Reg No</th>
            <th>Name</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.regno || student.sno}>
              <td>{student.sno}</td>
              <td>{student.regno}</td>
              <td>{student.name}</td>
              <td className="text-center">
                <Button
                  variant={attendance.get(student.sno) === "PRESENT" ? "success" : "outline-success"}
                  onClick={() => markAttendance(student.sno, "PRESENT")}
                >
                  ✅
                </Button>
              </td>
              <td className="text-center">
                <Button
                  variant={attendance.get(student.sno) === "ABSENT" ? "danger" : "outline-danger"}
                  onClick={() => markAttendance(student.sno, "ABSENT")}
                >
                  ❌
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        className="mt-3"
        variant="primary"
        onClick={submitAttendance}
        disabled={attendance.size === 0}
      >
        Submit Attendance
      </Button>
    </Container>
  );
};

export default Attendance;
