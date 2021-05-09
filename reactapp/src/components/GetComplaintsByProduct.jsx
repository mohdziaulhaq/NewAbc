import React, { Component } from 'react';
import AdminService from '../services/AdminService';
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
            <div>
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Get Complaints By Products</h2>

          <br></br>

          <div className="container">
            <div className="row">

            <div className="row g-2 pt-5">
                      <div className="col-5">
                        <label htmlFor="prod_cat" className="form-label text-start fs-1">Product Category:       
                        </label>
                      </div>
                      <div className="col-6">
                        <select  value="" className="form-select  mb-3" id="prod_cat" aria-label=".form-select-lg example" onChange={this.productCategoryHandler}>
                            <option value="" selected>  &nbsp;&nbsp;&nbsp;Select Product Category&nbsp;&nbsp;&nbsp;  </option>
                            <option value="AC">AC</option>
                            <option value="Cooler">Cooler</option>
                            <option value="Fridge">Fridge</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Mobile">Mobile</option>
                            <option value="TV">TV</option>
                        </select>
                      </div>
                    </div>

              <table className="table table-striped table-bordered">
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
              <div className="text-center">
                <button className="btn btn-outline-info" onClick={this.back}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
         );
    }
}
export default GetComplaintsByProduct;