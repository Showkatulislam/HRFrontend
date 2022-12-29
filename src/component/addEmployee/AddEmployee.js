import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./addemployee.css";
import axios from "axios";


const AddEmployee = () => {
  const [employe,SetEmploye]=useState({})
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newEmployee = { ...employe };
    newEmployee[field] = value;
    SetEmploye(newEmployee);
  };
  const handleLoginSubmit = (e) => {
    axios.post('/user', {
      employe
    })
    e.preventDefault();
  }
  console.log(employe)
  return (
    <div>
      <div className="add-employee-title">
        <AddIcon></AddIcon> <h1>New Employee</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleLoginSubmit}>
            <div className="input-group">
            <label>First Name</label><br />
            <input type="text" onBlur={handleOnBlur} placeholder="Enter first Name"  name="firstName" id="" />
            </div>
            <div className="input-group">
            <label>Last Name</label><br />
            <input type="text" onBlur={handleOnBlur}  name="lastName" id="" />
            </div>
            <div className="input-group">
            <label>Email</label><br />
            <input type="email" onBlur={handleOnBlur}  name="email" id="" />
            </div>
            <div className="input-group">
            <label>Contact number</label><br />
            <input type="text" onBlur={handleOnBlur}  name="contactnumber" id="" />
            </div>
            <div className="input-group">
            <label>Id</label><br />
            <input type="number" onBlur={handleOnBlur}  name="userid" id="" />
            </div>
            <div className="input-group">
            <label>Gender</label><br />
            <select name="gender" onBlur={handleOnBlur} id="cars">
            <option value="Male">Male</option>
            <option value="female">Female</option>
            </select>
            </div>
            <div className="input-group">
            <label>Office shift</label><br />
            <select name="office_shift" onBlur={handleOnBlur} id="cars">
            <option value="9am-5px">9am-5px</option>
            <option value="5pm-12pm">5pm-12pm</option>
            </select>
            </div>
            <div className="input-group">
            <label>Depertment</label><br />
            <select name="department" onBlur={handleOnBlur} id="cars">
            <option value="Php">PHP</option>
            <option value="reactjs">React Js</option>
            <option value="reactjs">Human resourse</option>
            </select>
            </div>
            <div className="input-group">
            <label>Designation</label><br />
            <select name="designation" onBlur={handleOnBlur} id="cars">
            <option value="Php">PHP</option>
            <option value="reactjs">React Js</option>
            <option value="reactjs">Human resourse</option>
            </select>
            </div>
            <div className="input-group">
            <label>current salary</label><br />
            <input type="number" onBlur={handleOnBlur} name="salary" id="" />
            </div>
            <div className="input-group ">
            <input className="btn" type="submit" value="submit" />
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
