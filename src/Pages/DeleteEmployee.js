import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const DeleteEmployee = () => {
  const [empNo, setEmpNo] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    const endpoint = `/api/v1.0/Employee/${empNo}`;
    axios
      .delete(endpoint)
      .then((response) => {
        swal("Success!", "Employee deleted successfully!", "success");
        setEmpNo("");
      })
      .catch((error) => {
        swal("Oops!", "Employee deletion unsuccessful!", "error");
        console.error(error);
        setEmpNo("");
      });
  };

  return (
    <div className="app">
      <form id="delteEmp">
        <input
          type="text"
          value={empNo}
          onChange={(e) => setEmpNo(e.target.value)}
          placeholder="Enter Employee Number"
        />
        <button onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default DeleteEmployee;
