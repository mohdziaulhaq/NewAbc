import React, { Component } from "react";
import AdminService from "../services/AdminService";

class AddEngineer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      engineerName: "",
      domain: "",
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
      console.log(res);
      this.setState({ updatestatus: res.data });
      if (this.state.updatestatus === true) {
        alert("Engineer added succesfully");
        console.log(res);
        this.props.history.push(`/homepage-admin/`);
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

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
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
                    <input
                      placeholder="Domain"
                      name="domain"
                      className="form-control"
                      title="enter engineer domain"
                      value={this.state.domain}
                      onChange={this.changeDomainHandler}
                      required
                    />
                  </div>

                  <button className="btn btn-outline-success" type="submit">
                    Submit
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEngineer;
