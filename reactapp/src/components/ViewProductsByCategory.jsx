import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ProductService from "../services/ProductService";
import Navigation from "./Navigation";

const divStyle = {
    width:'100%',
    height:'100vh',
    backgroundImage: "url(/bg-9.jpg)",
    backgroundSize: "cover",
  };

class ViewProductByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      products: [],
      product: { modelNumber: "" },
      productName: "",
      isEmpty: false,
    };
    this.getProducts=this.getProducts.bind(this);
  }
  getProducts = (event) => {
    event.preventDefault();
    ProductService.getProduct(event.target.value).then((res) => {
      this.setState({
        products: res.data,
      });
      if (this.state.products.length <= 0) {
        alert("No Products found!");
      }
    });
  }

  updateButtonHandler(modelNumber){
      ProductService.updateWarrantyDate(modelNumber)
          alert('Product Warrenty Extended For One Year')
  }
  render() {
    return (
      <div>

<div style={{ opacity: 0.7, fontWeight: "bold", fontSize: 18, backgroundColor:'black', color:'white'}} className="card col-md-11 mx-auto mt-5">
            <h2 className="text-white text-center">Product Details</h2>
        </div>
        <center>
          <select
            className="form-control col-4 my-5"
            onChange={this.getProducts}
          >
            <option defaultValue="Select Product Category">
              {" "}
              &nbsp;&nbsp;&nbsp;Select Product Category&nbsp;&nbsp;&nbsp;{" "}
            </option>
            <option value="AC">AC</option>
            <option value="Cooler">Cooler</option>
            <option value="FAN">FAN</option>
            <option value="Fridge">Fridge</option>
            <option value="Laptop">Laptop</option>
            <option value="Mobile">Mobile</option>
            <option value="TV">TV</option>
          </select>
          
          <div className="col-10 my-4">
            <table className="table table-hover table-bordered table-dark">
              <thead>
                <tr>
                  <th>ModelNumber</th>
                  <th>ProductName</th>
                  <th>ProductCategory Name</th>
                  <th>WarrentyYears</th>
                  <th>WarrentyDate</th>
                  <th>DateofPurchase</th>
                  <th>Update Warranty</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((p) => (
                  <tr>
                    <td> {p.modelNumber} </td>
                    <td>{p.productName}</td>
                    <td> {p.productCategoryName} </td>
                    <td> {p.warrantyYear}</td>
                    <td> {p.warrantyDate}</td>
                    <td> {p.dateOfPurchase}</td>
                    <td><button onClick={()=>this.updateButtonHandler(p.modelNumber)} className="btn btn-warning">Update Warranty</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </center>
      </div>
    );
  }
}

export default ViewProductByCategory;
