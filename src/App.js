import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import TableHeader from "./components/TableHeader";
import SearchBox from "./components/SearchBox";
import Container from "./components/Container";
import Title from "./components/Title";
import employees from "./employees.json";
import Footer from "./components/Footer";

class App extends Component {
  // Setting up state variables
  state = {
   employeeInfo: [],
   filter: "",
   sortFirstName: ""
  };

  //Setting this.state.employeeInfo to the employees json on mount
  componentDidMount() {
    this.setState({ employeeInfo: employees });
  }

  // Sets this.state.filter to the input in the searchBox component
  filterTable = (event) => {
    this.setState({filter: event.target.value})
  }

  //Sets this.state.sortFirstName to either ASC or DESC depending on current state
  sortTable = () => {
    if (this.state.sortFirstName === "ASC") {
      this.setState({sortFirstName: "DESC"});
    }
    else {
      this.setState({sortFirstName: "ASC"});
    }
  }

  filterAndSearchTable = () => {
    let employeeFilter = this.state.employeeInfo;
    //If searchbox is empty 
    if(this.state.filter === "") {
      // If this.state.sortFirstName is DESC return a DESC list
      if (this.state.sortFirstName === "DESC") {
        return employeeFilter.sort((a,b) => a.firstName > b.firstName ? -1 : 1);
      }
      // If this.state.sortFirstName is ASC return a ASC list
      else if (this.state.sortFirstName === "ASC") {
        return employeeFilter.sort((a,b) => a.firstName > b.firstName ? 1 : -1);
      }
      //Otherwise return original list
      else {
        return employeeFilter
      }
    }
    
    //Set input to lowercase so it can match the table firstnames
    let filterState = this.state.filter.toLowerCase().trim()
    //Filter json if it includes this.state.filter
    let filteredList = employeeFilter.filter(employee => (employee.firstName.toLowerCase().includes(filterState)) || employee.lastName.toLowerCase().includes(filterState) || employee.occupation.toLowerCase().includes(filterState) || employee.email.toLowerCase().includes(filterState))
    
      //Sort this.state.firstName
      if (this.state.sortFirstName === "DESC") {
        return filteredList.sort((a,b) => a.firstName > b.firstName ? -1 : 1);
      }
      else if (this.state.sortFirstName === "ASC") {
        return filteredList.sort((a,b) => a.firstName > b.firstName ? 1 : -1); 
      }
      else {
        return filteredList;
      }
  };

  //Render components. Use map to create a new array with the results of this.filterAndSearchTable
  render() {
    return (
      
        <Container>
        <Title/>
        <SearchBox 
          filterEvent = {this.filterTable}
        />
        <div className="table-responsive">
          <table className="table table-hover table-dark table-responsive-sm">
            <TableHeader sortEvent = {this.sortTable}/>
              {this.filterAndSearchTable().map(employee => (
                <EmployeeTable
                  key={employee.id}
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  occupation={employee.occupation}
                  email={employee.email}
                />
                ))}
          </table>
        </div>
        <Footer/>
        </Container>
     
    );
  }
}

export default App;
