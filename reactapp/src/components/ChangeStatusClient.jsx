import React, { Component } from "react";
import ClientService from "../services/ClientService";
import ComplaintService from "../services/ComplaintService";
import Navigation from "./Navigation";

const divStyle = {
  paddingBottom:'40px',
  backgroundImage: "url(/adminbg.jpg)",
  backgroundSize: "cover",
};
class ChangeStatusClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      complaints: [],
      id: sessionStorage.getItem("id"),
      client: {
        clientId: sessionStorage.getItem("id"),
      },
      complaintId: "",
    };

    this.buttonHandler = this.buttonHandler.bind(this);
  }
  componentDidMount() {
    ComplaintService.getClientComplaints(this.state.client).then((res) => {
      this.setState({
        complaints: res.data,
      });
      let data=res.data
      if(data.length===0){
        alert("No Complaints Found")
      }
    });
  }

  buttonHandler(complaintId) {
    ClientService.changeStatusClient(complaintId).then((res) => {
      alert(res.data);
    });
    window.location.reload(false);
  }

  render() {
    return (
      <div style={divStyle}>
        <Navigation/>
        <div className="container">
        <h1 className="text-center pt-4" style={{fontFamily:'Georgia, serif', fontWeight: 'bold'}}>Complaints History</h1>
        <br/>
        <div className="row">
                    <table className="table table-hover table table-bordered mb-5 table-warning">
            <thead>
              <tr>
              <th>complaint_id</th>
                       <th>Complaintname</th>
                       <th>Status</th>
                       <th>Engineerid</th>
                       <th>Clientid</th>
                       <th>Model number</th>
                       <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
              { this.state.complaints.map((c) => (
                       <tr key={c.complaintId}>
                         <td> {c.complaintId} </td>
                         <td> {c.complaintName}</td>
                         <td> {c.status} </td>
                         <td> {c.engineerId}</td>
                         <td> {c.clientId}</td>
                         <td> {c.modelNumber}</td>
                         <td>{c.status ==="Open"? (<button className="btn btn-info px-3" onClick={()=>this.buttonHandler(c.complaintId)} type="submit"> &nbsp;Close Complaint </button>):(<button className="btn btn-outline-secondary" onClick={()=>this.buttonHandler(c.complaintId)} type="submit" disabled>Complaint Closed</button>) }</td>
                       </tr>
              
                     ))}
            </tbody>
          </table>
                  </div>

                  
                  </div>
        </div>
    );
  }
}

export default ChangeStatusClient;
