import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from '@mui/icons-material/Work';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Person3Icon from '@mui/icons-material/Person3';
import { Link } from "react-router-dom";
const LeftPart = () => {
  return (
    <div className="leftpart">
      <ul className="">
        <li className="left-link">
          <Link to='/home/employee'>
            <span>
              <PeopleIcon></PeopleIcon>
            </span>
            <span>Employees</span>
          </Link>
        </li>
        <li className="left-link">
          <Link to='/home/department'>
            <span>
            <WorkIcon></WorkIcon>
            </span>
            <span>Department</span>
          </Link>
        </li>
        <li className="left-link">
          <Link to="announcemant">
            <span>
              <NoteAddIcon></NoteAddIcon>
            </span>
            <span>Announcement</span>
          </Link>
        </li>
        <li className="left-link">
          <Link to='attendance'>
            <span>
              <Person3Icon></Person3Icon>
            </span>
            <span>Attendance</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftPart;
