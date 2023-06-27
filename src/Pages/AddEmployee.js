import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const AddEmployeeForm = () => {
  const [empNo, setEmpNo] = useState("");
  const [empName, setEmpName] = useState("");
  const [empAddressLine1, setEmpAddressLine1] = useState("");
  const [empAddressLine2, setEmpAddressLine2] = useState("");
  const [empAddressLine3, setEmpAddressLine3] = useState("");
  const [departmentCode, setDepartmentCode] = useState("");
  const [dateOfJoin, setDateOfJoin] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [basicSalary, setBasicSalary] = useState("");
  const [isActive, setIsActive] = useState();
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      empNo: empNo,
      empName: empName,
      empAddressLine1: empAddressLine1,
      empAddressLine2: empAddressLine2,
      empAddressLine3: empAddressLine3,
      departmentCode: departmentCode,
      dateOfJoin: dateOfJoin,
      dateOfBirth: dateOfBirth,
      basicSalary: basicSalary,
      isActive: isActive,
    };

    if (validateForm(data)) {
      const apiUrl = "/api/v1.0/Employee";
      const apiToken = "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf";

      axios
        .post(apiUrl + apiToken, data)
        .then((response) => {
          swal("Success!", "Employee added successfully!", "success");
          console.log("Employee added successfully:", response.data);
          resetForm();
        })
        .catch((error) => {
          if (error.response && error.response.data.errors) {
            swal("Oops!", "Mandatory fields are required.", "error");
            setErrors(error.response.data.errors);
          } else {
            swal("Oops!", "Employee added unsuccessfully!", "error");
            console.error("Error adding employee:", error);
          }
        });
    } else {
      swal("Oops!", "Please fill in all mandatory fields.", "error");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.empNo) {
      errors.empNo = "Employee Number is required.";
    } else if (data.empNo.length > 15) {
      errors.empNo = "Employee Number should be at most 15 characters.";
    }

    if (!data.empName) {
      errors.empName = "Employee Name is required.";
    } else if (data.empName.length > 50) {
      errors.empName = "Employee Name should be at most 50 characters.";
    }

    if (!data.empAddressLine1) {
      errors.empAddressLine1 = "Address Line 1 is required.";
    } else if (data.empAddressLine1.length > 80) {
      errors.empAddressLine1 =
        "Address Line 1 should be at most 80 characters.";
    }

    if (data.empAddressLine2 && data.empAddressLine2.length > 80) {
      errors.empAddressLine2 =
        "Address Line 2 should be at most 80 characters.";
    }

    if (data.empAddressLine3 && data.empAddressLine3.length > 80) {
      errors.empAddressLine3 =
        "Address Line 3 should be at most 80 characters.";
    }

    if (!data.departmentCode) {
      errors.departmentCode = "Department Code is required.";
    } else if (data.departmentCode.length > 15) {
      errors.departmentCode =
        "Department Code should be at most 15 characters.";
    }

    if (!data.dateOfJoin) {
      errors.dateOfJoin = "Date of Join is required.";
    }

    if (!data.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required.";
    }

    if (!data.basicSalary) {
      errors.basicSalary = "Basic Salary is required.";
    } else if (isNaN(data.basicSalary)) {
      errors.basicSalary = "Basic Salary should be a valid number.";
    }

    if (typeof data.isActive === "undefined") {
      errors.isActive = "Is Active field is required.";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setEmpNo("");
    setEmpName("");
    setEmpAddressLine1("");
    setEmpAddressLine2("");
    setEmpAddressLine3("");
    setDepartmentCode("");
    setDateOfJoin("");
    setDateOfBirth("");
    setBasicSalary("");
    setIsActive("");
  };

  return (
    <div className="app">
      <form id="addEmp" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="empNo">Employee Number:</label>
          <input
            type="text"
            placeholder="Employee Number"
            id="empNo"
            value={empNo}
            onChange={(e) => setEmpNo(e.target.value)}
          />

          {errors.empNo && <p>{errors.empNo}</p>}
        </div>
        <div>
          <label htmlFor="empName">Employee Name:</label>
          <input
            type="text"
            placeholder="Employee Name"
            id="empName"
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
          />
          {errors.empName && <p>{errors.empName}</p>}
        </div>
        <div>
          <label htmlFor="empAddressLine1">Address Line 1:</label>
          <input
            type="text"
            placeholder="Address Line 1:"
            id="empAddressLine1"
            value={empAddressLine1}
            onChange={(e) => setEmpAddressLine1(e.target.value)}
          />
          {errors.empAddressLine1 && <p>{errors.empAddressLine1}</p>}
        </div>
        <div>
          <label htmlFor="empAddressLine2">Address Line 2:</label>
          <input
            type="text"
            placeholder="Address Line 2:"
            id="empAddressLine2"
            value={empAddressLine2}
            onChange={(e) => setEmpAddressLine2(e.target.value)}
          />
          {errors.empAddressLine2 && <p>{errors.empAddressLine2}</p>}
        </div>
        <div>
          <label htmlFor="empAddressLine3">Address Line 3:</label>
          <input
            type="text"
            placeholder="Address Line 3:"
            id="empAddressLine3"
            value={empAddressLine3}
            onChange={(e) => setEmpAddressLine3(e.target.value)}
          />
          {errors.empAddressLine3 && <p>{errors.empAddressLine3}</p>}
        </div>
        <div>
          <label htmlFor="departmentCode">Department Code:</label>
          <input
            type="text"
            placeholder="Department Code:"
            id="departmentCode"
            value={departmentCode}
            onChange={(e) => setDepartmentCode(e.target.value)}
          />
          {errors.departmentCode && <p>{errors.departmentCode}</p>}
        </div>

        <div>
          <label htmlFor="dateOfJoin">Date of Join:</label>
          <input
            type="text"
            placeholder="Date of Join:"
            id="dateOfJoin"
            value={dateOfJoin}
            onChange={(e) => setDateOfJoin(e.target.value)}
          />
          {errors.dateOfJoin && <p>{errors.dateOfJoin}</p>}
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="text"
            placeholder="Date of Birth:"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
        </div>
        <div>
          <label htmlFor="basicSalary">Basic Salary:</label>
          <input
            type="text"
            placeholder="Basic Salary:"
            id="basicSalary"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
          />
          {errors.basicSalary && <p>{errors.basicSalary}</p>}
        </div>

        <div>
          <label htmlFor="isActive">Is Active:</label>
          <select
            id="isActive"
            value={isActive}
            onChange={(e) => setIsActive(e.target.value === "true")}
          >
            <option value="">-- Select --</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          {errors.isActive && <p>{errors.isActive}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
