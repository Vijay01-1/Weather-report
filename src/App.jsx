import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Student from "./components/Student";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Attendance from "./components/Attendance";
import Atrecord from "./components/Atrecord";
import { useState, useEffect } from "react";


function App() {
  const [students, setStudents] = useState([]);
  const [attendanceList, setAttendanceList] = useState([]);

  // Load students from localStorage when app starts
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);

  // Save students to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Function to add a new student
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // Function to update attendance records
  const handleAttendance = (updatedList) => {
    setAttendanceList(updatedList);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Student" element={<Student data={students} addStudent={addStudent} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Attendance" element={<Attendance students={students} handleAttendance={handleAttendance} />} />
          <Route path="/Atrecord" element={<Atrecord List={attendanceList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
