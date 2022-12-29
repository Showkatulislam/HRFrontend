import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./component/addEmployee/AddEmployee";
import Announcement from "./component/Announcement/Announcement";
import Attendance from "./component/attendance/Attendance";
import Department from "./component/department/Department";
import Employee from "./component/employee/Employee";

import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}>
          <Route path="employee" element={<Employee></Employee>}></Route>
          <Route
            path="addemploye"
            element={<AddEmployee></AddEmployee>}
          ></Route>
          <Route path="attendance" element={<Attendance></Attendance>}></Route>
          <Route path="department" element={<Department></Department>}></Route>
          <Route path="announcemant" element={<Announcement></Announcement>}>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
