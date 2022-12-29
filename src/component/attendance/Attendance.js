import React, { useState } from 'react';
import './attendance.css'
const Attendance = () => {
    const [reason,setReason] = useState(false);
    var dt = new Date();
    return (
        <div>
        <div className="attendance-title">
         <h1>Edit Attendance</h1>
      </div>
        <div className="attendance-container">
            <div className="attendance-header">
                <span>Mark Attendance</span>
            </div>
            <div className="attendance-data-container">
                <div className="attendance-date">
                    <p>{dt.toDateString()}</p>
                </div>
                <div className="attendance-mark-container">
                    <table>
                        <thead>
                            <tr>
                            <th>EmployId</th>
                            <th>Name</th>
                            <th>Mark</th>
                            <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1001</td>
                            <td>showkatul</td>
                            <td>
                                <button onClick={()=>setReason(false)} className='present-btn'>Present</button>
                                <button onClick={()=>setReason(true)}   className='absent-btn'>Absent</button>
                            </td>
                            <td>
                                {
                                    reason &&<input type="text" name="" id="" placeholder='Reason' />
                                }
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Attendance;