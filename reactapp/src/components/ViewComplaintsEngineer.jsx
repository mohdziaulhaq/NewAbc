import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import ClientService from "../services/ClientService";
import EngineerService from "../services/EngineerService";
import Navigation from './Navigation';
class ViewComplaintsEngineer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: sessionStorage.getItem("id"),
      complaints: [],
      engineer: {
        employeeId: sessionStorage.getItem("id"),
      },
      complaintId: "",
         }
    }

    buttonHandler(complaintId) {
        ClientService.changeStatusClient(complaintId).then((res) => {
          alert(res.data);
        });
        window.location.reload(false);
      }

    componentDidMount() {
        console.log(this.state.engineer);
        EngineerService.getEngineerComplaints(this.state.engineer).then((res) => {
          this.setState({
            complaints: res.data,
          });
          console.log(res);
        });
      }

    render() { 
        return ( 
        <>
            <Navigation/>
            <div className="card col-md-6 offset-md-3 offset-md-3">
      <h2 className="text-center">My Tasks</h2>

      <br></br>

      <div className="container">
        <div className="row">
          <table className="table table-hover table table-bordered">
            <thead>
              <tr>
                <th>Complaint ID</th>
                <th>Description</th>
                <th>Status</th>
                {/* <th>Engineerid</th> */}
                <th>Client ID</th>
                <th>Product Model No</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.complaints.map((c) => (
                <tr key={c.complaintId}>
                  <td> {c.complaintId} </td>
                  <td> {c.complaintName}</td>
                  <td> {c.status} </td>
                  {/* <td> {c.engineerId}</td> */}
                  <td> {c.clientId}</td>
                  <td> {c.modelNumber}</td>
                  <td>
                    {c.status === "Open" ? (
                      <div className="col-6">
                        <button
                          className="btn btn-danger"
                          onClick={() => this.buttonHandler(c.complaintId)}
                          type="submit"
                        >
                          Close Complaint
                        </button>
                      </div>
                    ) : (
                      <button
                        className="btn btn-secondary"
                        onClick={() => this.buttonHandler(c.complaintId)}
                        type="submit"
                        disabled
                      >
                        Resolved
                      </button>
                    )}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
         );
    }
}0
 
export default ViewComplaintsEngineer;