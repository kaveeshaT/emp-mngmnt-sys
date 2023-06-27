import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const DeleteEmployee = () => {
  const [empNo, setEmpNo] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();

    const endpoint = `/api/v1.0/Employee/${empNo}`;
    axios
      .delete(endpoint)
      .then((response) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        });

        setEmpNo("");
      })
      .catch((error) => {
        console.error(error);
        swal("Oops!", "Employee deletion unsuccessful!", "error");
        setEmpNo("");
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
