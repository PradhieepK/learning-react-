import React, { Component } from "react";
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import { addEmployee, addEmployeeData } from "../action/Action";

class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmployeeId: 0,
      name: "",
      emailId: "",
    };
  }

  handleTextChange = (event) => {
    if (event.target.name === "EmployeeId") {
      this.setState({
        ...this.state,
        [event.target.name]: parseInt(event.target.value),
      });
    } else {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value,
      });
    }
  };

  addEmployee = async () => {
    this.props.addEmployeeDispatch(this.state);
  };

  render() {
    const { EmployeeId, name, emailId } = this.props;
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          this.addEmployee();
        }}
      >
        <div>
          <h1>
            <u>Add Employee</u>
          </h1>
        </div>
        <div>
          <label>Employee ID : </label>
          <input
            name="EmployeeId"
            type="number"
            value={EmployeeId}
            onChange={this.handleTextChange}
          />
        </div>
        <div>
          <label>Name : </label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleTextChange}
          />
        </div>
        <div>
          <label>E-mail : </label>
          <input
            name="emailId"
            type="text"
            value={emailId}
            onChange={this.handleTextChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addEmployeeDispatch: (employee) => {
      dispatch(addEmployee(employee));
      addEmployeeData(employee);
    },
  };
};

export default connect(null, mapDispatchToProps)(Employee);
