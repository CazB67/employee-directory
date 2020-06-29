import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
//import Form from "./components/Form";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
   employees
  };

  filterName = firstName => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.firstName === firstName.val().trim());
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  // Map over this.state.employees and render a EmployeeTable component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <div className="table-responsive">
        <table className="table table-hover table-dark table-responsive-sm">
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
              filterName={this.filterName}
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
        </div>
      </Wrapper>
    );
  }
}

export default App;