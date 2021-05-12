import React, { Component } from "react";
import AdminService from "../services/AdminService";
import Navigation from "./Navigation";
import { Card,Form,Col} from "react-bootstrap";
const divStyle = {
  paddingBottom:'80px',
  backgroundImage: "url(/bg-13.jpg)",
  backgroundSize: "cover",
}
class AddEngineer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      engineerName: "",
      domain: "",
      engineers:[]
    };
  }

  addEngineer = (event) => {
    event.preventDefault();
    let engineer = {
      password: this.state.password,
      engineerName: this.state.engineerName,
      domain: this.state.domain,
    };
    console.log(engineer);

    AdminService.addEngineer(engineer).then((res) => {
      this.setState({ updatestatus: res.data });
      if (this.state.updatestatus === true) {
        alert("Engineer added succesfully");
        window.location.reload(false);
      }
    });
  };
  cancel = (event) => {
    event.preventDefault();
    this.props.history.push("/login");
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeNameHandler = (event) => {
    this.setState({ engineerName: event.target.value });
  };
  changeDomainHandler = (event) => {
    this.setState({ domain: event.target.value });
  };
  engineerDomainHandler =(event) =>{
    event.preventDefault()
    this.setState({
      domain1: event.target.value
    })
    AdminService.getEngineerByDomain(event.target.value).then((res)=>{
      this.setState({
        engineers:res.data
      })
    })
  }
  newDomainHandler=(event)=>{
    event.preventDefault()
    this.setState({
      newDomain: event.target.value
    })
  }
  newDomainButtonHandler(employeeId){
    console.log(employeeId)
    AdminService.changeEngineerDomain(employeeId,this.state.newDomain).then((res)=>{
      alert("Engineer Domain Changed to "+this.state.newDomain + " Successfully")
    })
  }

  render() {
    return (
      <div style={divStyle}>
        <Navigation/>
        <br></br>
        <div className="container">
          <div className="row">
            <Card style={{ opacity: 0.8, fontWeight: "bold", fontSize: 18, backgroundColor:'#020017', color:'white'}} className="col-md-6 mx-auto" border="dark">
              <h3 className="text-center">Add Engineer</h3>
              <div className="card-body">
                <form onSubmit={this.addEngineer}>
                  <div className="form-group">
                    <label className="font-weight-bold"> Engineer Name: </label>
                    <input
                      placeholder="Engineer name"
                      type="text"
                      name="engineerName"
                      className="form-control"
                      title="enter engineer name"
                      value={this.state.engineerName}
                      onChange={this.changeNameHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Password: </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Domain: </label>
                    <select
                      placeholder="Domain"
                      name="domain"
                      className="form-control"
                      title="enter engineer domain"
                      value={this.state.domain}
                      onChange={this.changeDomainHandler}
                      required
                    >
                      <option value=" " selected>Select Domain</option>
                      <option value="AC">AC</option>
                      <option value="Cooler">Cooler</option>
                      <option value="FAN">FAN</option>
                      <option value="Fridge">Fridge</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Mobile">Mobile</option>
                      <option value="TV">TV</option>
                     
                    </select>
                  </div>

                  <button className="btn btn-success align-self-center" type="submit">
                    Submit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </div>
        
        <div style={{ opacity: 0.9, fontWeight: "bold", fontSize: 18, backgroundColor:'black', color:'white'}} className="card col-md-10 mx-auto mt-5">
            <h2 className="text-white text-center">Engineers Details</h2>
        </div>
        <div className="container">
        <div className="form-group">
                    <label style={{ fontWeight: "bold", fontSize: 15, color:'white', paddingTop:'30px'}}> Filter Engineers By Domain: </label>
                    <select
                      placeholder="Domain"
                      name="engineerDomain"
                      className="form-control"
                      title="enter engineer domain"
                      value={this.state.domain1}
                      onChange={this.engineerDomainHandler}
                      required
                    >
                      <option value=" " selected>Select Domain</option>
                      <option value="AC">AC</option>
                      <option value="Cooler">Cooler</option>
                      <option value="FAN">FAN</option>
                      <option value="Fridge">Fridge</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Mobile">Mobile</option>
                      <option value="TV">TV</option>
                    </select>
                  </div>
          <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Domain</th>
                  <th>Name</th>
                  <th>Change Domain</th>
                </tr>
              </thead>
              <tbody>
                {this.state.engineers.map((engineer) => (
                  <tr key={engineer.employeeId}>
                    <td>{engineer.employeeId}</td>
                    <td> {engineer.domain} </td>
                    <td> {engineer.engineerName}</td>
                    <td>  
                      <Form.Row>   
                        <Col xs={9}>                                                 
                        <Form.Control as="select"
                          placeholder="Domain"
                          name="engineerNewDomain"
                          className="form-control"
                          title="enter engineer domain"
                          onChange={this.newDomainHandler}
                        >
                          <option value=" " selected>Select New Domain</option>
                          <option value="AC">AC</option>
                          <option value="Cooler">Cooler</option>
                          <option value="FAN">FAN</option>
                          <option value="Fridge">Fridge</option>
                          <option value="Laptop">Laptop</option>
                          <option value="Mobile">Mobile</option>
                          <option value="TV">TV</option>
                        </Form.Control></Col><Col><button className="btn btn-danger px-3" onClick={()=>this.newDomainButtonHandler(engineer.employeeId)} type="submit"> &nbsp;&nbsp;Update&nbsp;&nbsp;</button></Col>
                      </Form.Row>
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

export default AddEngineer;
