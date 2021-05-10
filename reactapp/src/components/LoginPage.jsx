import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LoginService from "../services/LoginService";
import Header from "./Header";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginres: "",
      id: "",
      id1:"0",
      password: "",
      choice: "client",
      rememberMe: false,
      formErrors: {
        id: "",
        password: "",
      },
    };

    //this.handleValidation = this.handleValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange(e) {
    //e.preventDefault();
    const { name, value } = e.target;
    // let formErrors = { ...this.state.formErrors };
    // switch (name) {
    //   case "id":
    //     formErrors.name = value.length == 0 ? "please enter id" : "";
    //     break;
    //   case "password":
    //     formErrors.name =
    //       value.length <= 3 ? "password length must be greater than 4" : "";
    //     break;
    //   default:
    //     break;
    // }
    // this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    this.setState({ [name]: value });
  }

  handleCheckBoxChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };



  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const id = rememberMe ? localStorage.getItem("id") : "";
    this.setState({ id, rememberMe });
  }

  loginUser = (e) => {
    e.preventDefault();
    sessionStorage.setItem("id", this.state.id);
    sessionStorage.setItem("role", this.state.choice);
    //sessionStorage.setItem('password',this.state.password);
    localStorage.setItem("rememberMe", this.state.rememberMe);
    localStorage.setItem("id", this.state.rememberMe ? this.state.id : "");
    if (this.state.choice === "client") {
      LoginService.loginUser(this.state.id, this.state.password, 1).then(
        (res) => {
          this.setState({ loginres: res.data });
          if (this.state.loginres === "Login successfull") {
            this.props.history.push(`/homepage-client/${this.state.id}`);
          } else {
            alert(this.state.loginres);
            window.location.reload(false);
          }
        }
      );
    }
    if (this.state.choice === "engineer") {
      LoginService.loginUser(this.state.id, this.state.password, 2).then(
        (res) => {
          this.setState({ loginres: res.data });
          if (this.state.loginres === "Login successfull") {
            this.props.history.push(`/homepage-engineer/${this.state.id}`);
          } else {
            alert(this.state.loginres);
            window.location.reload(false);
          }
        }
      );
    }

    if (this.state.choice === "admin") {
      LoginService.loginUser(this.state.id, this.state.password, 3).then(
        (res) => {
          this.setState({ loginres: res.data });
          if (this.state.loginres === "Login successfull") {
            this.props.history.push(`/homepage-admin/${this.state.id}`);
          } else {
            alert(this.state.loginres);
            window.location.reload(false);
          }
          console.log(this.state.loginres);
        }
      );
    }
  };

  register = (event) => {
    event.preventDefault();
    if (this.state.choice === "client") {
      this.props.history.push("/register-client");
    }
  };

  componentDidMount() {}

  showErrorPW(){
    if(this.state.password.length < 4){
      return "password can't be less than 4"
    }else{
      return null;
    }
  }

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.showErrorPW();
    console.log(event.target.value);
    console.log(event.target.value.length);
    
    this.setState({ password: event.target.value });
  };
  changeChoiceHandler = (event) => {
    this.setState({ choice: event.target.value });
  };

  render() {
    return (
      <>
      <Header/>
      <div>
        <div className="container">
          <div className="row ">
            <div
              style={{ backgroundColor: "#F2FEFF" }}
              className="card col-md-6 offset-md-3 offset-md-3 p-3 mb-2 text-dark "
            >
              <h2 className="text-center font-weight-bold">Please login</h2>
              <hr></hr>
              <div className="card-body">
                <form name="form" onSubmit={this.loginUser}>
                  <div className="form-group">
                    <label className="font-weight-bold">
                      Login as a&nbsp;&nbsp;&nbsp;
                    </label>
                    <select
                      id="users"
                      name="users"
                      value={this.state.choice}
                      onChange={this.changeChoiceHandler}
                    >
                      <option value="client">Client</option>
                      <option value="engineer">Engineer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Id</label>
                    <input
                      type="text"
                      placeholder="Id"
                      className="form-control "
                      /// className={formErrors.id.length > 0 ? "error" : null}
                      name="id"
                      value={this.state.id}
                      //noValidate
                      onChange={this.changeIdHandler}
                      //required
                    />
                   <div className="iderror">
                        {
                          (this.state.id.length>0 && this.state.id.length < 2) && <span className="text-danger">invalid id</span>
                        }
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control "
                      name="password"
                      pattern="[A-Za-z0-9]{4,}"
                      title="password cannot be less than 4 characters"
                      value={this.state.password}
                      //noValidate
                      onChange={this.changePasswordHandler}
                      required
                    />
                     {/* <div className="pwerror">
                        {
                          this.showErrorPW()
                        }
                    </div> */}
                     <div className="pwerror">
                        {
                          (this.state.password.length>0 && this.state.password.length < 4) && <span className="text-danger">password cannot be less than 4 characters</span>
                        }
                    </div>
                  </div>
                  <input
                    name="rememberMe"
                    checked={this.state.rememberMe}
                    onChange={this.handleCheckBoxChange}
                    type="checkbox"
                  />{" "}
                  Remember me
                  <div className="">
                    <button
                      className="btn btn-outline-primary btn btn-lg btn-block"
                      type="submit"
                      // onClick={this.loginUser}
                    >
                      Login
                    </button>
                  </div>
                  <div className="">
                    <Link to="/forgotPassword" className="btn btn-link  ">
                      Forgot Password ?
                    </Link>
                    {/*<button className="btn btn-success" onClick={this.forgotPassword}>Forgot Password</button>*/}
                  </div>
                  <div className="text-center">
                    <p className="text-primary">
                      Not a Member?&nbsp;&nbsp;
                      <button
                        className="btn btn-outline-success"
                        onClick={this.register}
                      >
                        Register
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default LoginPage;
