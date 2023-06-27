import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const UpdateEmployee = () => {
  const initialState = {
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
  };

  const [employee, setEmployee] = useState(initialState);
  const [errors, setErrors] = useState({});

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
        swal("Oops!", "Enter Employee ID", "error");
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
    if (validateForm()) {
      axios
        .put(`/api/v1.0/Employee`, employee)
        .then(() => {
          swal("Success!", "Employee data updated successfully!", "success");
          setEmployee(initialState);
        })
        .catch((error) => {
          console.log(error);
          swal("Oops!", "Mandatory Fields are Required", "error");
        });
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!employee.empNo) {
      errors.empNo = "Employee Number is required.";
    } else if (employee.empNo.length > 15) {
      errors.empNo = "Employee Number should be at most 15 characters.";
    }

    if (!employee.empName) {
      errors.empName = "Employee Name is required.";
    } else if (employee.empName.length > 50) {
      errors.empName = "Employee Name should be at most 50 characters.";
    }

    if (!employee.empAddressLine1) {
      errors.empAddressLine1 = "Address Line 1 is required.";
    } else if (employee.empAddressLine1.length > 80) {
      errors.empAddressLine1 =
        "Address Line 1 should be at most 80 characters.";
    }

    if (employee.empAddressLine2 && employee.empAddressLine2.length > 80) {
      errors.empAddressLine2 =
        "Address Line 2 should be at most 80 characters.";
    }

    if (employee.empAddressLine3 && employee.empAddressLine3.length > 80) {
      errors.empAddressLine3 =
        "Address Line 3 should be at most 80 characters.";
    }

    if (!employee.departmentCode) {
      errors.departmentCode = "Department Code is required.";
    } else if (employee.departmentCode.length > 15) {
      errors.departmentCode =
        "Department Code should be at most 15 characters.";
    }

    if (!employee.dateOfJoin) {
      errors.dateOfJoin = "Date of Join is required.";
    }

    if (!employee.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required.";
    }

    if (!employee.basicSalary) {
      errors.basicSalary = "Basic Salary is required.";
    } else if (isNaN(employee.basicSalary)) {
      errors.basicSalary = "Basic Salary should be a valid number.";
    }

    if (!employee.isActive === "") {
      errors.isActive = "Is Active field is required.";
    }

    setErrors(errors);
    return valid;
  };

  const isValidDate = (dateString) => {
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!pattern.test(dateString)) {
      return false;
    }
    const date = new Date(dateString);
    const isValidDate = !isNaN(date.getTime());
    return isValidDate;
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
          {errors.empNo && <p>{errors.empNo}</p>}
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
          {errors.empName && <p>{errors.empName}</p>}
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
          {errors.empAddressLine1 && <p>{errors.empAddressLine1}</p>}
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
          {errors.empAddressLine2 && <p>{errors.empAddressLine2}</p>}
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
          {errors.empAddressLine3 && <p>{errors.empAddressLine3}</p>}
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
          {errors.departmentCode && <p>{errors.departmentCode}</p>}
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
          {errors.dateOfJoin && <p>{errors.dateOfJoin}</p>}
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
          {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
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
          {errors.basicSalary && <p>{errors.basicSalary}</p>}
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
          {errors.isActive && <p>{errors.isActive}</p>}
        </div>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
