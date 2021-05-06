import React, { Component } from 'react';
class HomePageAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.match.params.id1,
            admin: '',
         }
    }

    logout = (e) => {
        this.props.history.push('/login');
      };


    render() { 
        return ( 
            <div>
        <h2 className="text-center">Welcome Admin {this.state.admin.id}, what do you want to do next?</h2>
        <div className="text-right">
          <button className="btn btn-outline-danger" onClick={this.logout}>
            Logout
          </button>
        </div>
        <div className="text-center">
          <div style={{ border: 'none' }} className="card col-md-8 offset-md-2 table-borderless">
            <button className="btn btn-outline-primary mr-5" onClick={this.update}>
              Add Engineer
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.getTaxforms}>
              Change Domain of Engineer
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.manageActors}>
              Remove Engineer
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.viewNotice}>
              Get All Complaints
            </button>
            <button className="btn btn-outline-primary mr-5" onClick={this.viewNotice}>
              Get Complaints By Products
            </button>

            <button className="btn btn-outline-primary mr-5" onClick={this.viewNotice}>
              Replace Engineer from Complaint
            </button>
          </div>
        </div>
      </div>
         );
    }
}
 
export default HomePageAdmin;