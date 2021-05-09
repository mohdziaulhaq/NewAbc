import React, { Component } from "react";
import ClientService from "../services/ClientService";
import ComplaintService from "../services/ComplaintService";
class ChangeStatusClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      complaints: [],
      id: sessionStorage.getItem("id"),
      client: {
        clientId: sessionStorage.getItem("id"),
      },
      complaintId: "",
    };

    this.buttonHandler = this.buttonHandler.bind(this);
  }
  componentDidMount() {
    ComplaintService.getClientComplaints(this.state.client).then((res) => {
      this.setState({
        complaints: res.data,
      });
    });
  }

  buttonHandler(complaintId) {
    ClientService.changeStatusClient(complaintId).then((res) => {
      alert(res.data);
    });
    window.location.reload(false);
  }

  render() {
    return (
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <h2 className="text-center">View My Complaints</h2>

        <br></br>

        <div className="container">
          <div className="row">
            <table className="table table-hover table table-bordered">
              <thead>
                <tr>
                  <th>Complaint ID</th>
                  <th>Complaintname</th>
                  <th>Status</th>
                  <th>Engineerid</th>
                  <th>Clientid</th>
                  <th>Model number</th>
                  <th>Change Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.complaints.map((c) => (
                  <tr key={c.complaintId}>
                    <td> {c.complaintId} </td>
                    <td> {c.complaintName}</td>
                    <td> {c.status} </td>
                    <td> {c.engineerId}</td>
                    <td> {c.clientId}</td>
                    <td> {c.modelNumber}</td>
                    <td>
                
                      {c.status === "Open" ? (
                        <button
                          className="btn btn-danger"
                          onClick={() => this.buttonHandler(c.complaintId)}
                          type="submit"
                        >
                          Close Complaint
                        </button>
                      ) : (
                        <button
                          className="btn btn-secondary"
                          onClick={() => this.buttonHandler(c.complaintId)}
                          type="submit"
                          disabled
                        >
                          Complaint Closed
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
    );
  }
}

export default ChangeStatusClient;
