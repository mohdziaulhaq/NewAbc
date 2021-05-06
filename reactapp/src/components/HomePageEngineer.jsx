import React, { Component } from 'react';
class HomePageEngineer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.match.params.id1,
            engineer:''
         }
    }
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
              View my Profile
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.update}>
              Update my Profile
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.getTaxforms}>
              Verify Customer Taxforms
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