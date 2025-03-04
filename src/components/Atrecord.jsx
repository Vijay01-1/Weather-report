import React from "react";
import PropTypes from "prop-types";
import { Container, Table } from "react-bootstrap";

const Atrecord = ({ List }) => {
  return (
    <Container className="mt-5">
      <h2 className="text-primary mb-4">Attendance Record</h2>
      <Table striped bordered hover responsive className="shadow rounded">
        <thead className="text-center bg-light">
          <tr>
            <th>S.NO</th>
            <th>REG.NO</th>
            <th>NAME</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {List.map((record, index) => (
            <tr key={record.regno || index}>
              <td>{record.sno}</td>
              <td>{record.regno}</td>
              <td>{record.name}</td>
              <td
                className={`fw-bold ${
                  record.status === "PRESENT" ? "text-success" : "text-danger"
                }`}
              >
                {record.status}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Prop validation
Atrecord.propTypes = {
  List: PropTypes.arrayOf(
    PropTypes.shape({
      sno: PropTypes.number.isRequired,
      regno: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Atrecord;
