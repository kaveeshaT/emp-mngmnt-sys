import React, { useState, useEffect } from "react";
import axios from "axios";

const DepartmentTable = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get("/api/v1.0/Departments", {
        headers: {
          "Content-Type": "application/json",
          apiToken: "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
        },
      });

      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  return (
    <div>
      <h1 className="departments-heading">Departments</h1>
      <table>
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((r, i) => (
            <tr key={i}>
              <td>{r.departmentCode}</td>
              <td>{r.departmentName}</td>
              <td>{r.isActive.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;
