import React from "react";
import "./style.css";

function TableHeader(props) {
    return (
        <thead>
          <tr>
            
            <th scope="col" className="hover" onClick ={props.sortEvent}> First Name</th>
            <th scope="col"> Last Name</th>
            <th scope="col">Occupation</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
      );
    }

export default TableHeader;