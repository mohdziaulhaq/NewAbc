import React, { Component } from 'react';
class HomePageEngineer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.match.params.id1,
            engineer:''
         }
    }

    logout = (e) => {
        this.props.history.push('/login');
      };



    render() { 
        return ( 
            <div>
        <h2 className="text-center">Welcome {this.state.engineer.name}, what do you want to do next?</h2>
        <div className="text-right">
          <button className="btn btn-outline-danger" onClick={this.logout}>
            Logout
          </button>
        </div>
        <div className="text-center">
          <div style={{ border: 'none' }} className="card col-md-8 offset-md-2 table-borderless">
            <button className="btn btn-outline-primary mr-5" onClick={this.viewRepresentativeProfile}>
              Get All Open Complaints
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.update}>
              Get Resolved Complaints
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.getTaxforms}>
              Change Status of Complaint
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.viewNotice}>
              View my sent Notices
            </button>
          </div>
        </div>
      </div>
         );
    }
}
 
export default HomePageEngineer;