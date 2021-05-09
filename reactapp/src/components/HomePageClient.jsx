import React, { Component } from 'react'
const divStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: "url(/sad-customer.png)",
    backgroundColor: "#99ccff",
    backgroundSize: 'cover',
    float: 'right'
  };

const s={
    width: '40rem',
    backgroundColor: "#99ccff",
    fontSize: 60,
    fontFamily: 'Georgia'
}

class HomePageClient extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.match.params.id,
            client : '',
       };
        
        this.bookComplaintHandler=this.bookComplaintHandler.bind(this)
    }
    
    bookComplaintHandler=()=>{
        this.props.history.push("/bookComplaint")
    }
    logout = (e) => {
      this.props.history.push('/login');
    };
    render() {
        return (
            
            <div style={divStyle}>
              <div className="alert alert-secondary alert-dismissible fade show" role="alert">
      In accordance with the latest Government guidelines on <strong>COVID-19</strong>, our services will be restricted in some locations
      <button type="button" className="close"data-dismiss="alert" aria-label="close"   >
        <span aria-hidden="true">&times;</span>
      </button>
      </div>
      <div className="text-right">
          <button className="btn btn-outline-link" onClick={this.logout}>
            Logout
          </button>
        </div>


    <p></p>
            <div className="card align-self-center border-0 float-left pt-5 pl-5" style={s} >
                <p className="card-title"><b>Not Happy With The Product or Service Received?</b></p>
                <p className="py-2"></p>
                <button type="button" className="btn btn-primary" onClick={this.bookComplaintHandler}>Book Complaint</button>
                </div>
            </div>
        )
    }
}

export default HomePageClient
