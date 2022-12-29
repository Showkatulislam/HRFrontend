import React from "react";
import "./department.css";
import AddIcon from "@mui/icons-material/Add";
import WorkIcon from "@mui/icons-material/Work";
import DeleteIcon from '@mui/icons-material/Delete';
const Department = () => {
  return (
    <div>
      <div className="department-title">
        <h1>Department</h1>
      </div>
      <div className="add-department-btn">
        <button >
          Add New Department <AddIcon></AddIcon>
        </button>
      </div>
      <div className="department-list-container">
        <div className="department-list-header">
          <WorkIcon></WorkIcon>
          <h1>departments List</h1>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Department Name</th>
                <th>Designations</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10010</td>
                <td>Data Collection</td>
                <td>
                  <ul>
                    <li>Assistant Surveyor</li>
                    <li>Surveyor</li>
                  </ul>
                </td> 
                <td>
                    <button className='delete-btn'>
                        < DeleteIcon></DeleteIcon> <span>Delete</span>
                    </button>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Department;
