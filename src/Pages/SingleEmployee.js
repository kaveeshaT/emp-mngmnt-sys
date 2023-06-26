import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState(null);
  const [empNo, setEmpNo] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const handleInputChange = (event) => {
    setEmpNo(event.target.value);
  };

  const getEmployee = () => {
    axios
      .get(`/api/v1.0/Employee/${empNo}`, {
        headers: {
          Authorization: "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
        },
      })
      .then((response) => {
        if (response.data) {
          setEmployee(response.data);
          setInvalidInput(false);
        } else {
          setEmployee(null);
          setInvalidInput(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setEmployee(null);
        setInvalidInput(true);
      });
  };

  const handleClick = () => {
    if (empNo) {
      getEmployee();
    } else {
      setInvalidInput(true);
    }
  };

  const clearData = () => {
    setEmployee(null);
    setEmpNo("");
    setInvalidInput(false);
  };

  return (
    <div className="app">
      <form id="singleEmp">
        <input
          type="text"
          value={empNo}
          onChange={handleInputChange}
          placeholder="Enter employee number"
        />
        <button onClick={handleClick}>Retrieve</button>
        <button onClick={clearData}>Clear</button>
      </form>
      {invalidInput && (
        <Modal isOpen={true} onRequestClose={() => setInvalidInput(false)}>
          <h2>Invalid Employee Number</h2>
          <p>The entered employee number is invalid or not found.</p>
          <button onClick={() => setInvalidInput(false)}>Close</button>
        </Modal>
      )}

      {employee && (
        <table>
          <tbody>
            <tr>
              <th>empNo</th>
              <td>{employee.empNo}</td>
            </tr>
            <tr>
              <th>empName</th>
              <td>{employee.empName}</td>
            </tr>
            <tr>
              <th>empAddressLine1</th>
              <td>{employee.empAddressLine1}</td>
            </tr>
            <tr>
              <th>empAddressLine2</th>
              <td>{employee.empAddressLine2}</td>
            </tr>
            <tr>
              <th>empAddressLine3</th>
              <td>{employee.empAddressLine3}</td>
            </tr>
            <tr>
              <th>departmentCode</th>
              <td>{employee.departmentCode}</td>
            </tr>
            <tr>
              <th>dateOfJoin</th>
              <td>{employee.dateOfJoin}</td>
            </tr>
            <tr>
              <th>dateOfBirth</th>
              <td>{employee.dateOfBirth}</td>
            </tr>
            <tr>
              <th>basicSalary</th>
              <td>{employee.basicSalary}</td>
            </tr>
            <tr>
              <th>isActive</th>
              <td>{employee.isActive ? "Active" : "Inactive"}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeDetails;
