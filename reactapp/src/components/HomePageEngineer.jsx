import React, { Component } from "react";
import { Card, CardDeck,Form } from "react-bootstrap";
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
  marginBottom: "300px"
};

const cardStyle={ opacity: 0.8, fontWeight: "bold", fontSize: 18, backgroundColor:'#04012b', color:'white'}
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
    EngineerService.getEngineer(engineer).then((res) => {
      console.log(res);
      let engineer = res.data;
     
      sessionStorage.setItem("name", `Engineer ${this.state.id}`);
      sessionStorage.setItem("engineerName", engineer.engineerName);
      sessionStorage.setItem("domain", engineer.domain);
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
                   New <br/>Complaints <p className="mt-2" style={{fontSize:65, color: 'blue'}}>{this.state.complaints.length-this.state.rcomplaints.length}</p>
                </Card.Title>
              </Card.Body>
            </Card>
         
          </CardDeck>
        </div>
        <Form.Row>
            <CardDeck className="mx-auto pt-3">
              <div className="d-flex bd-highlight example-parent mt-4">
              <a href="/getcomplaintsbydate"><button className="btn btn-info mx-2 p-2 flex-fill bd-highlight col-example"><Card className="bg-info px-auto border-0">
              <Card.Body><Card.Title>
              <p  style={{fontSize:20, color: ' white', fontWeight: 'bold'}}>View Complaints By Date</p></Card.Title></Card.Body>
              </Card></button></a>
              
              </div>
            </CardDeck>
          </Form.Row>
      </div>
        
      <div style={{ opacity: 0.9, fontWeight: "bold", fontSize: 18, backgroundColor:'black', color:'white'}} className="card col-md-12 mx-auto my-4">
            <h2 className="text- black text-center py-2">Assigned Complaints</h2>
          </div>
          <div className="container-fluid">
          <table className="table table-hover table-primary table-bordered ml-2 mr-5">
              <thead>
                <tr>
                  <th>Complaint ID</th>
                  <th>Complaintname</th>
                  <th>Status</th>
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
                    <td> {c.clientId}</td>
                    <td> {c.modelNumber}</td>
                    <td>
                      {c.status === "Open" ? (
                        <button
                          className="btn btn-danger px-3"
                          onClick={() => this.buttonHandler(c.complaintId)}
                          type="submit"
                        >
                          {" "}
                          &nbsp;Close Complaint{" "}
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => this.buttonHandler(c.complaintId)}
                          type="submit"
                          disabled
                        >
                          Resolved
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
    
    );
  }
}

export default HomePageEngineer;
