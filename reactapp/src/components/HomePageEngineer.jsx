import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import ClientService from "../services/ClientService";
import EngineerService from "../services/EngineerService";
import Navigation from "./Navigation";

const divStyle = {
  width: '100%',
  height: "100vh",
  backgroundPosition: "center",
  backgroundImage: "url(/eng.png)",
  backgroundSize: "contain",
  backgroundRepeat: 'no-repeat'
};
class HomePageEngineer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: sessionStorage.getItem("id"),
      complaints: [],
      engineer: {
        employeeId: sessionStorage.getItem("id"),
      },
      complaintId: "",
    };
  }

  logout = (e) => {
    this.props.history.push("/login");
  };

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
      
      <div className="container-fluid" style={divStyle}>
        <Navigation/>

        </div>
    );
  }
}

export default HomePageEngineer;
