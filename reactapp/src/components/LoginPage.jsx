import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import LoginService from '../services/LoginService';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            client: '',
            loginres:'',
            id:'',
            password:'',
            choice:'client'
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
          this.props.login(username, password);
        }
    }

    loginUser=(e)=> {
        e.preventDefault();
        if (this.state.choice === 'client') {
          LoginService.loginUser(this.state.id, this.state.password, 1).then((res) => {
            this.setState({ loginres: res.data });
            if (this.state.loginres === 'Login successfull') {
             this.props.history.push("/homepage-client");
            //this.props.history.push(`/homepage-client/${this.state.id}`);
            } else {
                
              // alert(this.state.loginres);
               //window.location.reload(false);
            }
          });//.catch(console.log(this.state.loginres));
        }
        if (this.state.choice === 'engineer') {
          LoginService.loginUser(this.state.id, this.state.password, 2).then((res) => {
            this.setState({ loginres: res.data });
            if (this.state.loginres === 'Login successfull') {
              this.props.history.push(`/homepage-engineer/${this.state.id}`);
            } else {
              alert(this.state.loginres);
              window.location.reload(false);
            }
          });
        }
    
        if (this.state.choice === 'admin') {
          LoginService.loginUser(this.state.id, this.state.password, 3).then((res) => {
            this.setState({ loginres: res.data });
            if (this.state.loginres === 'Login successfull') {
              this.props.history.push(`/homepage-admin/${this.state.id}`);
            } else {
              alert(this.state.loginres);
              window.location.reload(false);
            }
          });
        }
      }

      register = (event) => {
        event.preventDefault();
        if (this.state.choice === 'client') {
          this.props.history.push('/registerClient');
        }
        
      };
    
      changeIdHandler = (event) => {
        this.setState({ id: event.target.value });
      };
    
      changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
      };
      changeChoiceHandler = (event) => {
        this.setState({ choice: event.target.value });
      };


    render() { 
        return ( 
            <div>
        <div className="container">
          <div className="row ">
            <div style={{ backgroundColor: '#F2FEFF' }} className="card col-md-6 offset-md-3 offset-md-3 p-3 mb-2 text-dark ">
              <h2 className="text-center font-weight-bold">Login</h2>
              <hr></hr>
              <div className="card-body">
                <form name="form" onSubmit={this.loginUser}>
                  <div className="form-group">
                    <label className="font-weight-bold">Login/Register as a&nbsp;&nbsp;&nbsp;</label>
                    <select id="users" name="users" value={this.state.choice} onChange={this.changeChoiceHandler}>
                      <option value="client">Client</option>
                      <option value="engineer">Engineer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold">Id</label>
                    <input type="text" placeholder="Id" className="form-control " name="id" value={this.state.id} onChange={this.changeIdHandler} required />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Password</label>
                    <input type="password" placeholder="Password" className="form-control" name="password" value={this.state.password} onChange={this.changePasswordHandler} required />
                  </div>

                  <div className="">
                    <button className="btn btn-outline-primary btn btn-lg btn-block" type="submit">
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
                      <button className="btn btn-outline-success" onClick={this.register}>
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
         );
    }
}
 
export default LoginPage;