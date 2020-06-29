import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
//import TableHead from "./components/TableHead";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
   employees
  };

  
    

  // Map over this.state.employees and render a EmployeeTable component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col"> First Name</th>
            <th scope="col"> Last Name</th>
            <th scope="col">Occupation</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(employee => (
            <EmployeeTable
              id={employee.id}
              key={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              occupation={employee.occupation}
              email={employee.email}
            />
            ))}
        </tbody>
        </table>
      </Wrapper>
    );
  }
}

export default App;