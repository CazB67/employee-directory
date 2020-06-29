
import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName) {
      alert("Type in a last name please!");
    }else {
      alert(`Hello  ${this.state.firstName}`);
      
    }

    this.setState({
      lastName: "",
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <label for="basic-url" className="mt-5">Filter Employees by First Name</label>
        <form className="input-group mb-3 text-center">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
            className="form-control"
          />
          
          <button 
            className="btn btn-outline-secondary" 
            type="button"
            onClick={this.handleFormSubmit}>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;