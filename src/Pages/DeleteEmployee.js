import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const DeleteEmployee = () => {
  const [empNo, setEmpNo] = useState("");
  const [responseMessage] = useState("");

  const handleDelete = async () => {
    try {
      const apiKey = "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf";
      const endpoint = `/api/v1.0/Employee/${empNo}${apiKey}`;
      await axios.delete(endpoint);

      swal("Success!", "Employee deleted successfully!", "success");

      // Reset the input field
      setEmpNo("");
    } catch (error) {
      swal("Oops!", "Employee deleted Unsuccessfully!", "error");
      console.error(error);
      setEmpNo("");
    }
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
        <p>{responseMessage}</p>
      </form>
    </div>
  );
};

export default DeleteEmployee;
