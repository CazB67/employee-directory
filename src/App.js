import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import TableHeader from "./components/TableHeader";
import SearchBox from "./components/SearchBox";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
   employees
  };

  render() {
    return (
      <Wrapper>
        <Container>
        <Title></Title>
        <SearchBox></SearchBox>
        <div className="table-responsive">
        <table className="table table-hover table-dark table-responsive-sm">
          <TableHeader></TableHeader>
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
        </table>
        </div>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
