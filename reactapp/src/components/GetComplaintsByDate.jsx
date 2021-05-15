import React, { Component } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import EngineerService from "../services/EngineerService.js";
import Navigation from "./Navigation.jsx";
const divStyle = {
  height: '100vh',
  backgroundImage: "url(/bg3.jpg)",
  backgroundSize: 'cover',
  //float: 'right'
};
class GetComplaintsByDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: { employeeId: sessionStorage.getItem("id") },
      date: '',
      complaints: [],
    };
  }

  getComplaints = (event) => {
    event.preventDefault();
    console.log(this.state.date);
    EngineerService.getComplaintdate(this.state.employee, this.state.date).then(
      (res) => {
        this.setState({
          complaints: res.data,
        });
      }
    );
  };

  dateHandler = (event) => {
    this.setState({
      date: event.target.value
    });
    console.log('inside date handler'+this.state.date);
  }

  render() {
    return (
      <div style={divStyle}>
      <Navigation/>
      <div className="container">
        <h2 className="text-center mt-4 text-dark" style={{fontFamily:'Georgia, serif', fontWeight: 'bold'}}>Get Complaints By Date</h2>
        <center>
          <form onSubmit={this.getComplaints}>
            <div className="col-3">
              <div className="form-group">
                <label> Select the Date</label>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.dateHandler}
                />
                {/* <div>
                    <DatePicker selected={this.state.date} onChange={this.dateHandler}></DatePicker>
                </div> */}
              </div>
              <button className="btn btn-outline-primary" type="submit">
                Submit
              </button>{" "}
            </div>
          </form>
        </center>
        <div className="row">
          <table className="table table-hover table table-bordered">
            <thead>
              <tr>
                <th>Complaint Id</th>
                <th>Complaint Name</th>
                <th>Status</th>
                <th>Engineer Id</th>
                <th>Client Id</th>
                <th>Model Number</th>
              </tr>
            </thead>
            <tbody>
              {this.state.complaints.map((c) => (
                <tr>
                  <td> {c.complaintId} </td>
                  <td>{c.complaintName}</td>
                  <td> {c.status} </td>
                  <td> {c.engineerId}</td>
                  <td> {c.clientId}</td>
                  <td> {c.modelNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    );
  }
}

export default GetComplaintsByDate;
