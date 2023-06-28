import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const DeleteEmployee = () => {
  const [empNo, setEmpNo] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();

    // Show the confirmation dialog
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // User confirmed deletion
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
      } else {
        // User canceled deletion
        swal("Your imaginary file is safe!");
      }
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (empNo) {
      handleDelete(e);
    } else {
      setInvalidInput(true);
      swal("Oops!", "Enter Employee ID", "error");
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
        <button onClick={handleClick}>Delete</button>
      </form>
    </div>
  );
};

export default DeleteEmployee;
