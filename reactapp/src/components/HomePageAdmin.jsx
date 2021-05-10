import React, { Component } from "react";
import AdminService from "../services/AdminService";
import Navigation from "./Navigation";
import { Card, CardDeck } from "react-bootstrap";
import ComplaintService from "../services/ComplaintService";

const divStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: "url(/bg5.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  marginBottom: "230px"
};

class HomePageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: sessionStorage.getItem("id"),
      admin: "",
      complaints: [],
      openc: [],
      prods: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("didMount");
    AdminService.getAdmin(this.state.id).then((res) => {
      let admin = res.data;
      sessionStorage.setItem("phone", admin.contactNumber);
      sessionStorage.setItem("name", `Admin ${this.state.id}`);
      sessionStorage.setItem("email", admin.emailId);
    });
    AdminService.getComplaints().then((res) => {
      this.setState({ complaints: res.data });
    });
    AdminService.getOpenComplaints().then((res) => {
      this.setState({ openc: res.data });
    });
    AdminService.getProducts().then((res) => {
      this.setState({ prods: res.data });
    });
  }
  buttonHandler(complaintId) {
    AdminService.changeEngineer(complaintId).then((res) => {
      alert("Engineer replaced Successfully");
    });
  }

  logout = (e) => {
    this.props.history.push("/login");
  };

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
                    Total Complaints
                    <p className="mt-2" style={{ fontSize: 65, color: "red" }}>
                      {this.state.complaints.length}
                    </p>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    Open Complaints
                    <p
                      className="mt-2"
                      style={{ fontSize: 65, color: "yellow" }}
                    >
                      {this.state.openc.length}
                    </p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
            <br />
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    Closed Complaints
                    <p
                      className="mt-2"
                      style={{ fontSize: 65, color: "green" }}
                    >
                      {this.state.complaints.length - this.state.openc.length}
                    </p>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    Total <br />
                    Products{" "}
                    <p className="mt-2" style={{ fontSize: 65, color: "blue" }}>
                      {this.state.prods.length}
                    </p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
          <div className="col mx-3">
            <CardDeck>
              <a href="/addEngineer">
                <button className="btn btn-info">
                  <Card style={{ fontSize: 25 }} className="bg-info border-0">
                    <Card.Body>Add Engineer</Card.Body>
                  </Card>
                </button>
              </a>
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>Card Text Here</Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Total Complaints</Card.Title>
                  <Card.Text>Card Text</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title> Total Products </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </div>
        <div className="row mx-2 mt-3">
          <div className="container-fluid bg-dark my-3">
            <h2 className="text-white text-center">Complaints Registered</h2>
          </div>
          <table className="table table-hover table-dark table-bordered">
            <thead>
              <tr>
                <th>complaint_id</th>
                <th>Complaintname</th>
                <th>Status</th>
                <th>Engineerid</th>
                <th>Clientid</th>
                <th>Model number</th>
                <th>Action</th>
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
                        className="btn btn-danger px-3"
                        onClick={() => this.buttonHandler(c.complaintId)}
                        type="submit"
                      >
                        {" "}
                        &nbsp;Replace Engineer{" "}
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => this.buttonHandler(c.complaintId)}
                        type="submit"
                        disabled
                      >
                        Complaint Closed
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

export default HomePageAdmin;
