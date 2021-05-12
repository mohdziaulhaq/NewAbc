// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import LoginService from "../services/LoginService";
// import Header from "./Header";


// const divStyle = {
//   paddingBottom: "80px",
//   backgroundImage: "url(/bg-19.jpg)",
//   backgroundSize: "cover",
// };

// const validateForm = (errors) => {
//   let valid = true;
//   Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
//   return valid;
// };

// class LoginPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loginres: "",
//       id: "",
//       password: "",
//       choice: "client",
//       rememberMe: false,
//       errors: {
//         id: "",
//         password: "",
//       },
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
//     this.loginUser = this.loginUser.bind(this);
//   }

//   handleChange(e) {
//     e.preventDefault();
//     const { name, value } = e.target;
//     let errors = this.state.errors;

//     switch (name) {
//       case "id":
//         errors.id = value.length < 2 ? "invalid id" : "";
//         break;

//       case "password":
//         errors.password =
//           value.length < 4 ? "password must be greater than 4 characters" : "";
//       default:
//         break;
//     }

//     this.setState({ errors, [name]: value });
//   }

//   handleCheckBoxChange = (event) => {
//     const input = event.target;
//     const value = input.type === "checkbox" ? input.checked : input.value;
//     this.setState({ [input.name]: value });
//   };

//   componentDidMount() {
//     const rememberMe = localStorage.getItem("rememberMe") === "true";
//     const id = rememberMe ? localStorage.getItem("id") : "";
//     this.setState({ id, rememberMe });
//   }

//   loginUser = (e) => {
//     e.preventDefault();

//     if(validateForm(this.state.errors)){
//       sessionStorage.setItem("id", this.state.id);
//       sessionStorage.setItem("role", this.state.choice);
  
//       localStorage.setItem("rememberMe", this.state.rememberMe);
//       localStorage.setItem("id", this.state.rememberMe ? this.state.id : "");
  
//       if (this.state.choice === "client") {
//         LoginService.loginUser(this.state.id, this.state.password, 1).then(
//           (res) => {
//             this.setState({ loginres: res.data });
//             if (this.state.loginres === "Login successfull") {
//               this.props.history.push(`/homepage-client/${this.state.id}`);
//             } else {
//               alert(this.state.loginres);
//               window.location.reload(false);
//             }
//           }
//         );
//       }
//       if (this.state.choice === "engineer") {
//         LoginService.loginUser(this.state.id, this.state.password, 2).then(
//           (res) => {
//             this.setState({ loginres: res.data });
//             if (this.state.loginres === "Login successfull") {
//               this.props.history.push(`/homepage-engineer/${this.state.id}`);
//             } else {
//               alert(this.state.loginres);
//               window.location.reload(false);
//             }
//           }
//         );
//       }
  
//       if (this.state.choice === "admin") {
//         LoginService.loginUser(this.state.id, this.state.password, 3).then(
//           (res) => {
//             this.setState({ loginres: res.data });
//             if (this.state.loginres === "Login successfull") {
//               this.props.history.push(`/homepage-admin/${this.state.id}`);
//             } else {
//               alert(this.state.loginres);
//               window.location.reload(false);
//             }
//             console.log(this.state.loginres);
//           }
//         );
//       }
//     }else{
//         alert("please enter correct credentials")
//     }
    
//   };

//   register = (event) => {
//     event.preventDefault();
//     if (this.state.choice === "client") {
//       this.props.history.push("/register-client");
//     }
//   };

//   changeIdHandler = (event) => {
//     this.setState({ id: event.target.value });
//   };

//   changePasswordHandler = (event) => {
//     // this.showErrorPW();
//     this.setState({ password: event.target.value });
//   };
//   changeChoiceHandler = (event) => {
//     this.setState({ choice: event.target.value });
//   };

//   render() {
//     const {errors} = this.state;
//     return (
//       <div className="pt-5" style={divStyle}>
//         <Header />
//         <div>
//           <div className="container pt-5 mt-3">
//             <div className="row ">
//               <div
//                 style={{opacity:0.8, backgroundColor: "#000517", fontSize:'20px' }}
//                 className="card col-md-4 mx-auto text-dark "
//               >
//                 <h2 className="text-center font-weight-bold">Please login</h2>
//                 <hr></hr>
//                 <div className="card-body">
//                   <form name="form" onSubmit={this.loginUser} noValidate>
//                     <div className="form-group">
//                       <label className="font-weight-bold">
//                         Login as a&nbsp;&nbsp;&nbsp;
//                       </label>
//                       <select
//                         id="users"
//                         name="users"
//                         value={this.state.choice}
//                         onChange={this.changeChoiceHandler}
//                       >
//                         <option value="client">Client</option>
//                         <option value="engineer">Engineer</option>
//                         <option value="admin">Admin</option>
//                       </select>
//                     </div>
//                     <div className="form-group">
//                       <label className="font-weight-bold">Id</label>
//                       <input
//                         type="text"
//                         placeholder="Id"
//                         className="form-control "
//                         name="id"
//                         value={this.state.id}
//                         onChange={this.handleChange}
//                       />
//                       {errors.id.length > 0 && (
//                         <span className="text-danger">{errors.id}</span>
//                       )}
//                     </div>
//                     <div className="form-group">
//                       <label className="font-weight-bold">Password</label>
//                       <input
//                         type="password"
//                         placeholder="Password"
//                         className="form-control "
//                         name="password"
//                         value={this.state.password}
//                         onChange={this.handleChange}
//                       />
                      
//                       {errors.password.length > 0 && (
//                         <span className="text-danger">{errors.password}</span>
//                       )}

//                     </div>
//                     <input
//                       name="rememberMe"
//                       checked={this.state.rememberMe}
//                       onChange={this.handleCheckBoxChange}
//                       type="checkbox"
//                     />{" "}
//                     Remember me
//                     <div className="">
//                       <button
//                         className="btn btn-outline-primary btn btn-lg btn-block"
//                         type="submit"
//                       >
//                         Login
//                       </button>
//                     </div>
                   
//                     <div className="text-center">
//                       <p className="text-primary">
//                         Not a Member?&nbsp;&nbsp;
//                         <button
//                           className="btn btn-outline-success"
//                           onClick={this.register}
//                         >
//                           Register
//                         </button>
//                       </p>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default LoginPage;




import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LoginService from "../services/LoginService";
import Header from "./Header";

const divStyle = {
  paddingBottom: "80px",
  backgroundImage: "url(/bg-19.jpg)",
  backgroundSize: "cover",
};

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginres: "",
      id: "",
      password: "",
      choice: "client",
      rememberMe: false,
      errors: {
        id: "",
        password: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "id":
        errors.id = value.length < 2 ? "invalid id" : "";
        break;

      case "password":
        errors.password =
          value.length < 4 ? "password must be greater than 4 characters" : "";
      default:
        break;
    }

    this.setState({ errors, [name]: value });
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

    if(validateForm(this.state.errors)){
      sessionStorage.setItem("id", this.state.id);
      sessionStorage.setItem("role", this.state.choice);
  
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
    }else{
        alert("please enter correct credentials")
    }
    
  };

  register = (event) => {
    event.preventDefault();
    if (this.state.choice === "client") {
      this.props.history.push("/register-client");
    }
  };

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  changePasswordHandler = (event) => {
    // this.showErrorPW();
    this.setState({ password: event.target.value });
  };
  changeChoiceHandler = (event) => {
    this.setState({ choice: event.target.value });
  };

  render() {
    const {errors} = this.state;
    return (
      <div className="pt-5" style={divStyle}>
        <Header />
        <div>
          <div className="container pt-5 mt-3">
            <div className="row ">
              <div
                style={{opacity:0.8, backgroundColor: "#000517", fontSize:'20px' }}
                className="card col-md-5 mx-auto mb-2 text-light "
              >
                <h2 className="text-center font-weight-bold">Please login</h2>
                <hr></hr>
                <div className="card-body">
                  <form name="form" onSubmit={this.loginUser} noValidate>
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
                        name="id"
                        value={this.state.id}
                        onChange={this.handleChange}
                      />
                      {errors.id.length > 0 && (
                        <span className="text-danger">{errors.id}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control "
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      
                      {errors.password.length > 0 && (
                        <span style={{color:'#ff0000'}} className="text-danger">{errors.password}</span>
                      )}

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
                      >
                        Login
                      </button>
                    </div>
                   
                    <div className="text-center">
                      <p className="text-primary">
                        Not a Member?&nbsp;&nbsp;
                        <button
                          className="btn btn-outline-success mt-2"
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
      </div>
    );
  }
}

export default LoginPage;