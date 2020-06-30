import React from "react";


function TableHeader(props) {
    return (
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col"> First Name</th>
            <th scope="col"> Last Name</th>
            <th scope="col">Occupation</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
      );
    }

export default TableHeader;