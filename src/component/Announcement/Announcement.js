import React from 'react';
import './announcement.css'
import AddIcon from "@mui/icons-material/Add";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import DeleteIcon from '@mui/icons-material/Delete';
const Announcement = () => {
    return (
        <div>
        <div className="Announcement-title">
          <h1>Announcement</h1>
        </div>
        <div className="add-Announcement-btn">
          <button>
            Add New Announcement <AddIcon></AddIcon>
          </button>
        </div>
        <div className="Announcement-list-container">
          <div className="Announcement-list-header">
            <DocumentScannerIcon></DocumentScannerIcon>
            <h1>Announcements List</h1>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Department</th>
                  <th>Description</th>
                  <th>Create Time</th>
                  <th>End Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10010</td>
                  <td>I wonder what you're talking.</td>
                  <td> Assistant Surveyor </td> 
                  <td>Alice panted as she went on: 'But why did they live at the sudden change, but she had sat down in an agony of terror. 'Oh, there goes his PRECIOUS nose'; as an unusually large saucepan flew close by.</td>
                  <td>
                  23-Dec-2022</td>
                  <td>23-Dec-2022</td>
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

export default Announcement;