import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import TableHeader from "./components/TableHeader";
import SearchBox from "./components/SearchBox";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Title from "./components/Title";
import employees from "./employees.json";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
   employeeInfo: [],
   filter: "",
   sortFirstName: ""
  };

  componentDidMount() {
    this.setState({ employeeInfo: employees });
    
  }

  filterTable = (event) => {
    this.setState({filter: event.target.value})
  }

  sortTable = () => {
    console.log("Click: " + this.state.sortFirstName);
    if (this.state.sortFirstName === "ASC") {
      this.setState({sortFirstName: "DESC"});
    }
    else {
      this.setState({sortFirstName: "ASC"});
    }
    /*
    let employeeSort = this.state.employeeInfo
    let xy = employeeSort.sort((a,b) => a.firstName > b.firstName ? -1 : 1);
    let x = employeeSort.map(emp => emp.firstName);
    console.log("--------------------");
    console.log(x)
    console.log("++++++++++++++++++++++");
    console.log(x.sort())
    console.log("=====================");
    console.log(xy)
    //console.log(employeeSort);
    for(let i=0; i<employeeSort.length; i++){
      let firstNames = employeeSort[i].firstName
      console.log(firstNames);
    }
    */

  }


  filterData = () => {
    let employeeFilter = this.state.employeeInfo;
    console.log(this.state.sortFirstName);
    if(this.state.filter === "") {
      
      if (this.state.sortFirstName === "DESC") {
        return employeeFilter.sort((a,b) => a.firstName > b.firstName ? -1 : 1);
      }
      else if (this.state.sortFirstName === "ASC") {
        return employeeFilter.sort((a,b) => a.firstName > b.firstName ? 1 : -1);
      }
      else {
        return employeeFilter
      }
      
    }
    
    let filterState = this.state.filter.toLowerCase()
    console.log(filterState);
    let filteredList =  employeeFilter.filter(employee => (employee.firstName.toLowerCase().includes(filterState)) || employee.lastName.toLowerCase().includes(filterState) || employee.occupation.toLowerCase().includes(filterState) || employee.email.toLowerCase().includes(filterState))
    
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

  render() {
    return (
      <Wrapper>
        <Container>
        <Title/>
        <SearchBox 
          filterEvent = {this.filterTable}
        />
        <div className="table-responsive">
        <table className="table table-hover table-dark table-responsive-sm">
          <TableHeader sortEvent = {this.sortTable}/>
            {this.filterData().map(employee => (
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
      </Wrapper>
    );
  }
}

export default App;
