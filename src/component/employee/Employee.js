import React, { useEffect, useState } from "react";
import "./employee.css";

import AddIcon from "@mui/icons-material/Add";
import PeopleIcon from "@mui/icons-material/People";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
const Employee = () => {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);
  console.log(employee);
  return (
    <div>
      <div className="employee-text">
        <h1>Employees</h1>
        <p>Employee List</p>
      </div>
      <div className="add-employee-btn">
        <Link to="/home/addemploye">
          <button>
            Add New Employee <AddIcon></AddIcon>
          </button>
        </Link>
      </div>
      <div className="employee-list-container">
        <div className="employee-list-header">
          <PeopleIcon></PeopleIcon>
          <h1>Employees List</h1>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>EmployeeID</th>
                <th>Name</th>
                <th>Dept/Designation</th>
                <th>At Work</th>
                <th>Status</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((emp) => (
                <tr key={emp.empid}>
                  <td>{emp.empid}</td>
                  <td>{emp.name}</td>
                  <td>
                    Department: Android Developer <br />
                    Designation: Fresher Android Developer
                  </td>
                  <td>1 year 7 month 13 day</td>
                  <td>active</td>
                  <td>
                    <button className="edit-btn">
                      <EditIcon></EditIcon> edit
                    </button>
                    <button className="delete-btn">
                      {" "}
                      <DeleteIcon></DeleteIcon>delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
