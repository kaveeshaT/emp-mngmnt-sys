import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const UpdateEmployee = () => {
  const [employee, setEmployee] = useState({
    empNo: "",
    empName: "",
    empAddressLine1: "",
    empAddressLine2: "",
    empAddressLine3: "",
    departmentCode: "",
    dateOfJoin: "",
    dateOfBirth: "",
    basicSalary: "",
    isActive: "",
  });

  // Function to retrieve existing data when empNo is entered
  const fetchData = async () => {
    axios
      .get(`/api/v1.0/Employee/${employee.empNo}`)
      .then((response) => {
        if (response.data.empNo === null) {
          swal("Oops!", "Record not Found!", "error");
        } else {
          const existingEmployee = response.data;
          setEmployee(existingEmployee);
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Oops!", error, "error");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleIsActiveChange = (e) => {
    const { value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      isActive: value === "true",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(`/api/v1.0/Employee`, employee)
      .then(() => {
        swal("Success!", "Employee data updated successfully!", "success");
      })
      .catch((error) => {
        console.log(error);
        swal("Oops!", error, "error");
      });
  };

  return (
    <div className="app">
      <form id="updateEmp" onSubmit={handleSubmit}>
        <div>
          <label>Employee Number:</label>
          <input
            type="text"
            placeholder="Employee Number"
            name="empNo"
            value={employee.empNo}
            onChange={handleChange}
          />
          <button type="button" onClick={fetchData}>
            Get
          </button>
        </div>

        <br />
        <div>
          <label>Employee Name:</label>
          <input
            type="text"
            placeholder="Employee Name"
            name="empName"
            value={employee.empName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address Line 1:</label>
          <input
            type="text"
            placeholder="Address Line 1:"
            name="empAddressLine1"
            value={employee.empAddressLine1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address Line 2:</label>
          <input
            type="text"
            placeholder="Address Line 2:"
            name="empAddressLine2"
            value={employee.empAddressLine2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address Line 3:</label>
          <input
            type="text"
            placeholder="Address Line 3:"
            name="empAddressLine3"
            value={employee.empAddressLine3}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Department Code:</label>
          <input
            type="text"
            placeholder="Department Code:"
            name="departmentCode"
            value={employee.departmentCode}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Date of Join:</label>
          <input
            type="text"
            placeholder="Date of Join:"
            name="dateOfJoin"
            value={employee.dateOfJoin}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="text"
            placeholder="Date of Birth:"
            name="dateOfBirth"
            value={employee.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Basic Salary:</label>
          <input
            type="text"
            placeholder="Basic Salary:"
            name="basicSalary"
            value={employee.basicSalary}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Is Active:</label>
          <select
            name="isActive"
            value={employee.isActive}
            onChange={handleIsActiveChange}
          >
            <option value="">-- Select --</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
