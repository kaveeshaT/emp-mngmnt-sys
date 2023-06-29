import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(
        "/api/v1.0/Employees", // Updated URL
        {
          headers: {
            "Content-Type": "application/json",
            apiToken: "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
          },
        }
      );
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  return (
    <div className="employee-wrapper">
      <h1 className="employee-table-heading">Employee Table</h1>
      <table>
        <thead>
          <tr>
            <th> Employee No:</th>
            <th> Employee Name:</th>
            <th> Address Line 1:</th>
            <th> Address Line 2:</th>
            <th> Address Line 3:</th>
            <th>Department Code:</th>
            <th>Date of Join:</th>
            <th>Date of Birth:</th>
            <th>Basic Salary:</th>
            <th> Active Status:</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((r, i) => (
            <tr key={i}>
              <td>{r.empNo}</td>
              <td>{r.empName}</td>
              <td>{r.empAddressLine1}</td>
              <td>{r.empAddressLine2}</td>
              <td>{r.empAddressLine3}</td>
              <td>{r.departmentCode}</td>
              <td>{r.dateOfJoin}</td>
              <td>{r.dateOfBirth}</td>
              <td>{r.basicSalary}</td>
              <td>{r.isActive.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
