import React, { Component } from "react";
import ClientService from "../services/ClientService";
import Header from "./Header";

const divStyle = {
  paddingBottom: "90px",
  backgroundImage: "url(/bg-8.jpg)",
  backgroundSize: "cover",
};

const phoneRegex = RegExp(/^\d{10}$/);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class RegisterClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: null,
      password: null,
      phoneNumber: null,
      address: null,
      errors: {
        clientId: '',
        password: '',
        phoneNumber: '',
        address: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "clientId":
        errors.clientId =
          value.length < 3 ? "client id must be greater than 3 characters" : "";
        break;
      case "password":
        errors.password =
          value.length < 4 ? "password must be greater than 4 characters" : "";
        break;

      case "phoneNumber":
        errors.phoneNumber = phoneRegex.test(value)
          ? ""
          : "phone number is not valid";
        break;

      case "address":
        errors.address =
          value.length < 4 ? "address must be greater than 4 characters" : "";

      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  registerClient = (event) => {
    event.preventDefault();

    if (validateForm(this.state.errors)) {
      let client = {
        clientId: this.state.clientId,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        address: this.state.address,
      };

      ClientService.saveClient(client).then((res) => {
        console.log(client);
        this.setState({ updatestatus: res.data });
        if (this.state.updatestatus === "Client Saved Successfully") {
          alert("Profile created successfully! Please login");
          console.log(res);
          this.props.history.push(`/login`);
        }
      });
    } else {
      alert("Please enter correct information");
    }
  }
  cancel = (event) => {
    event.preventDefault();
    this.props.history.push("/login");
  };
 

  render() {
    const {errors} = this.state;
    return (
      <div style={divStyle}>
        <Header />
        <br />
        <div className="container mt-5">
          <div className="row">
            <div
              className="card col-md-6 mx-auto mt-5 text-dark"
              style={{ backgroundColor: "#bcbadb", opacity: 0.8 }}
            >
              <h3 className="text-center">Client Registration Form</h3>
              <div className="card-body">
                <form onSubmit={this.registerClient} noValidate>
                  <div className="form-group">
                    <label className="font-weight-bold"> Username: </label>
                    <input
                      placeholder="Username"
                      className="form-control"
                      name="clientId"
                      onChange={this.handleChange}
                      noValidate
                    />

                    {errors.clientId.length > 0 && (
                      <span className="text-danger">{errors.clientId}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Password: </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      onChange={this.handleChange}
                      noValidate
                    />

                    {errors.password.length > 0 && (
                      <span className="text-danger">{errors.password}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold">
                      {" "}
                      Contact Number:{" "}
                    </label>
                    <input
                      placeholder="Contact Number"
                      type="text"
                      name="phoneNumber"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                     {errors.phoneNumber.length > 0 && 
                <span className='error'>{errors.phoneNumber}</span>}
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Address: </label>
                    <input
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      onChange={this.handleChange}
                      noValidate
                    />
                     {errors.address.length > 0 && 
                <span className='error'>{errors.address}</span>}
                  </div>

                  <button className="btn btn-success">Submit</button>
                  <button
                    className="btn btn-danger"
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

export default RegisterClient;
