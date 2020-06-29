import React from "react";


function TableHead(props) {
  return (

<table className="table table-hover table-dark">
<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">Occupation</th>
    <th scope="col">Email</th>
  </tr>
</thead>

  );
}

export default TableHead;