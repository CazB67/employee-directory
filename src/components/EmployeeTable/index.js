import React from "react";
import "./style.css";

function EmployeeTable(props) {
    return (
    <tbody>
    <tr>
      
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.occupation}</td>
      <td>{props.email}</td>
    </tr>
    </tbody>
      );
    }

export default EmployeeTable;