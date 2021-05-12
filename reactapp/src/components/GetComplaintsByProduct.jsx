import React, { Component } from 'react';
import AdminService from '../services/AdminService';
import Navigation from "./Navigation";

const divStyle = {
  height: '100vh',
  backgroundImage: "url(/bg3.jpg)",
  backgroundSize: 'cover',
  //float: 'right'
};
class GetComplaintsByProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //product_category: this.props.match.params.id,
            complaints : [],
         };
    }

    productCategoryHandler=(event) => {
      let category= event.target.value;
      console.log(category);
      AdminService.getComplaintsByProduct(category).then((res)=>{
        this.setState({
          complaints : res.data
        });
        console.log(JSON.stringify(this.state.products));
      })
    }

    render() { 
        return ( 
          <div style={divStyle}>
          <Navigation />
          <div className="container" >
            <h2 className="text-center mt-4 text-dark" style={{fontFamily:'Georgia, serif', fontWeight: 'bold'}}>Complaints By Products</h2>
            <div className="row justify-content-center my-4">
            <select
              className="form-select form-select-lg text-danger"
              id="prod_cat"
              aria-label=".form-select-lg example"
              onChange={this.productCategoryHandler}
              style={{fontSize:20, fontWeight: 'bold'}}
            >
              <option selected>
                &nbsp;&nbsp;&nbsp;Select Product Category&nbsp;&nbsp;&nbsp;
              </option>
              <option value="AC">AC</option>
              <option value="Cooler">Cooler</option>
              <option value="Fridge">Fridge</option>
              <option value="Laptop">Laptop</option>
              <option value="Mobile">Mobile</option>
              <option value="TV">TV</option>
            </select>
            </div>
            <table className="table table-secondary table-striped table-bordered">
              <thead>
                <tr>
                  <th>Complaint ID</th>
                  <th> Complaint Name</th>
                  <th> Status</th>
                  <th> Engineer ID</th>
                  <th> Client ID</th>
                  <th> Product Model No</th>
                </tr>
              </thead>
              <tbody>
                {this.state.complaints.map((complaint) => (
                  <tr key={complaint.complaintId}>
                    <td> {complaint.complaintId} </td>
                    <td> {complaint.complaintName} </td>
                    <td> {complaint.status} </td>
                    <td> {complaint.engineerId} </td>
                    <td> {complaint.clientId} </td>
                    <td> {complaint.modelNumber} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
         );
    }
}
export default GetComplaintsByProduct;