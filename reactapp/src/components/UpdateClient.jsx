import React, { Component } from "react";
import ClientService from "../services/ClientService";
class UpdateClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: sessionStorage.getItem("id"),
      password: "",
      phoneNumber: "",
      address: "",
    };
  }

  updateClient = (e) => {
    e.preventDefault();

    let client = {
      clientId: this.state.clientId,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
    };

    
    ClientService.saveClient(client).then((res) => {
      console.log(res);
      this.setState({ updatestatus: res.data });
      if (this.state.updatestatus === "Client Saved Successfully") {
        alert("Profile updated successfully");
        console.log(res);
        window.location.reload(false);
      }
    });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeContactNoHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };
  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  cancel() {
    this.props.history.push(`/homepage-client/${this.state.id}`);
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Profile</h3>
              <div className="card-body">
                <form onSubmit={this.updateClient}>
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
                    <label className="font-weight-bold">
                      {" "}
                      Contact Number:{" "}
                    </label>
                    <input
                      placeholder="Contact Number"
                      type="text"
                      name="contactNo"
                      className="form-control"
                      pattern="(^$|[0-9]{10})"
                      title="contact no should be of 10 digits"
                      value={this.state.phoneNumber}
                      onChange={this.changeContactNoHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Address: </label>
                    <input
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      title="enter address"
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                      required
                    />
                  </div>

                  <button className="btn btn-outline-success" type="submit">
                    Update
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

export default UpdateClient;
