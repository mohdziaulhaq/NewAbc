import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import ClientService from "../services/ClientService";
import EngineerService from "../services/EngineerService";
import Navigation from "./Navigation";

const divStyle = {
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundImage: "url(/eng.png)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  marginBottom: "120px"
};
class HomePageEngineer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: sessionStorage.getItem("id"),
      engineer: {
        employeeId: sessionStorage.getItem("id"),
      },
      complaints: [],
      rcomplaints: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    console.log("constructor")
  }

  buttonHandler(complaintId) {
    ClientService.changeStatusClient(complaintId).then((res) => {
      alert(res.data);
    });
    window.location.reload(false);
  }

  componentDidMount() {
    let engineer = {
      employeeId: sessionStorage.getItem("id"),
    };
    console.log("didMount");
    EngineerService.getEngineer(this.state.id).then((res) => {
      console.log(res);
      let engineer2 = res.data;
      sessionStorage.setItem("name", `Engineer ${this.state.id}`);
      sessionStorage.setItem("engineerName", engineer2.engineerName);
      sessionStorage.setItem("domain", engineer2.domain);
    });

    EngineerService.getResolvedComplaints(engineer).then((res) => {
      this.setState({ rcomplaints: res.data });
    });

    EngineerService.getEngineerComplaints(engineer).then((res) => {
      this.setState({ complaints: res.data });
    });

    
  }

  render() {
    return (
      <div style={divStyle}> 
      <Navigation />
      <div className="row pt-3">
        <div className="col-4 ml-2">
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  Open Complaints<p className="mt-2" style={{fontSize:65, color: 'red'}}>{this.state.complaints.length-this.state.rcomplaints.length}</p>
                </Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  Resolved Complaints<p className="mt-2" style={{fontSize:65, color: 'green'}}>{this.state.rcomplaints.length}</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
          <br />
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  Total Complaints<p className="mt-2" style={{fontSize:65, color: 'yellow'}}>{this.state.complaints.length}</p>
                  </Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                   New <br/>Complaints <p className="mt-2" style={{fontSize:65, color: 'blue'}}>{this.state.complaints.length}</p>
                </Card.Title>
              </Card.Body>
            </Card>
         
          </CardDeck>
        </div>
        
      </div>
      <div className="card col-md-6 offset-md-3 offset-md-3">
      <h2 className="text-center">Assigned Complaints</h2>

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
    </div>
    );
  }
}

export default HomePageEngineer;
