import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DepartmentTable from "./Pages/Department";
import AddEmployeeForm from "./Pages/AddEmployee";
import UpdateEmployee from "./Pages/UpdateEmployee";
import EmployeeDetails from "./Pages/SingleEmployee";
import EmployeeTable from "./Pages/EmployeeTable";
import DeleteEmployee from "./Pages/DeleteEmployee";

function App() {
  return (
    <Router>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" exact Component={Home} />
        <Route path="/departmenttable" exact Component={DepartmentTable} />
        <Route path="/addemployeeform" exact Component={AddEmployeeForm} />
        <Route path="/updateemployee" exact Component={UpdateEmployee} />
        <Route path="/deleteemployee" exact Component={DeleteEmployee} />
        <Route path="/employeedetails" exact Component={EmployeeDetails} />
        <Route path="/employeetable" exact Component={EmployeeTable} />
      </Routes>
    </Router>
  );
}

export default App;
