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
   employeeInfo: [],
   filter: ""
  };

  componentDidMount() {
    this.setState({ employeeInfo: employees });
  }

  filterFirstName = (event) => {
    this.setState({filter: event.target.value})
  }

  filterData = () => {
    let employeeFilter = this.state.employeeInfo;
    if(this.state.filter === "") {
      return employeeFilter
    }
    return employeeFilter.filter(employee => employee.firstName.toLowerCase().includes(this.state.filter.toLowerCase()) )
  };

  render() {
    return (
      <Wrapper>
        <Container>
        <Title/>
        <SearchBox 
          filterEvent = {this.filterFirstName}
        />
        <div className="table-responsive">
        <table className="table table-hover table-dark table-responsive-sm">
          <TableHeader/>
            {this.filterData().map(employee => (
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
