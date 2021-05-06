import React, { Component } from 'react'

const divStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: "url(/sad-customer.png)",
    backgroundSize: 'cover',
    float: 'right'
  };

const s={
    width: '30rem',
    fontstyle: 'Fantasy'
}

class HomePageClient extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             id: this.props.match.params.id1,
             client : '',
        };
        
        this.bookComplaintHandler=this.bookComplaintHandler.bind(this)
    }
    
    bookComplaintHandler=()=>{
        this.props.history.push("/bookComplaint")
    }

    render() {
        return (
            <div style={divStyle}>
                
            <div className="alert alert-success alert-dismissible fade show text-center" role="alert">
      <strong>Welcome</strong> to ABC Electronics Complaint Portal.
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
            <div className="card align-self-center border-0 float-left" style={s} >
                <h1 className="card-title py-5"><b>Not Happy With The Product or Service Received?</b></h1>
                <p className="py-5"></p>
                <button type="button" className="btn btn-primary" onClick={this.bookComplaintHandler}>Book Complaint</button>
                </div>
            </div>
        )
    }
}

export default HomePageClient;