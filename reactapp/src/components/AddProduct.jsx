import React, { Component } from "react";
import ProductService from "../services/ProductService";
import Navigation from "./Navigation";
import ViewProductsByCategory from "./ViewProductsByCategory";
const divStyle = {
    backgroundImage: "url(/bg4.jpg)",
    backgroundSize: "cover",
    backgroundAttachment: 'fixed'
  };
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      modelNumber: "",
      productCategoryName: "",
      warrantyYear: "",
      warrantyDate: "",
      dateOfPurchase: "",
    };
  }
  componentDidMount() {}
  getTitle() {
    return "Product Details";
  }

  addProduct = (event) => {
    event.preventDefault();
    let product = {
      productName: this.state.productName,
      modelNumber: this.state.modelNumber,
      productCategoryName: this.state.productCategoryName,
      warrantyYear: this.state.warrantyYear,
      warrantyDate: this.state.warrantyDate,
      dateOfPurchase: this.state.dateOfPurchase,
    };
    console.log(product);
    ProductService.addProduct(product).then((res) => {
      console.log(res);
      this.setState({ updatestatus: res.data });
      if(this.state.updatestatus=== "Product Added Successfully"){
        alert(res.data);
        console.log(res);
        this.props.history.push(`/homepage-admin/`);
      }else{
        alert("Something went wrong while adding the product");
      }
    });
  };
  cancel = (event) => {
    event.preventDefault();
    this.props.history.push("/homepage-admin");
  };
  changeProductNameHandler = (event) => {
    this.setState({ productName: event.target.value });
  };

  changeModelNumberHandler = (event) => {
    this.setState({ modelNumber: event.target.value });
  };

  changeProductCategoryNameHandler = (event) => {
    this.setState({ productCategoryName: event.target.value });
  };

  changeWarrantyYearHandler = (event) => {
    this.setState({ warrantyYear: event.target.value });
  };
  changeWarrantyDateHandler = (event) => {
    this.setState({ warrantyDate: event.target.value });
  };
  changeDateOfPurchaseHandler = (event) => {
    this.setState({ dateOfPurchase: event.target.value });
  };

  render() {
    return (
      <div style={divStyle}> 
          <Navigation/>
        <br></br>
            
            <div className="container">
            <div
              style={{ backgroundColor: "black", color:"white", fontWeight:"bold", fontSize:"25", opacity:0.8}}
              className=" card col-md-6 mx-auto my-auto"
            >
              <center> {this.getTitle()}</center>
              <div className="card-body">
                <form onSubmit={this.addProduct} >
                  <div className="form-group">
                    <label> Product Name </label>
                    <input
                      type="text"
                      placeholder="Ex: LG Fridge"
                      name="productname"
                      title="Must contain only characters and size should be between 2 to 30"
                      className="form-control"
                      value={this.state.productName}
                      onChange={this.changeProductNameHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label> Model Number </label>
                    <input
                      type="text"
                      placeholder="Ex: 342231"
                      name="modelnumber"
                      className="form-control"
                      value={this.state.modelNumber}
                      onChange={this.changeModelNumberHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label> Product Category Name </label>
                    <input
                      type="text"
                      placeholder="Ex: Fridge"
                      name="categoryname"
                      title="Must contain only characters and size should be between 2 to 30"
                      className="form-control"
                      value={this.state.categoryName}
                      onChange={this.changeProductCategoryNameHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> Warrenty Year </label>
                    <input
                      type="text"
                      placeholder="Ex: 4"
                      name="years"
                      className="form-control"
                      value={this.state.warrantyYear}
                      onChange={this.changeWarrantyYearHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> Warranty Date </label>
                    <input
                      type="text"
                      placeholder="Ex: yyyy-mm-dd"
                      name="date"
                      title="Must contain only characters and size should be between 2 to 30"
                      className="form-control"
                      value={this.state.warrantyDate}
                      onChange={this.changeWarrantyDateHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> Date Of Purchase </label>
                    <input
                      type="text"
                      placeholder="Ex: yyyy-mm-dd"
                      name="purchasedate"
                      title="Must contain only characters and size should be between 2 to 30"
                      className="form-control"
                      value={this.state.dateOfPurchase}
                      onChange={this.changeDateOfPurchaseHandler}
                      required
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    type="submit"
                    style={{ marginLeft: "10px" }}
                  >
                    ADD
                  </button>
                  <button
                    className="btn btn-danger"
                    type="button"
                    style={{ marginLeft: "10px" }}
                    onClick={this.cancel}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
            </div>
            <br/><br/>
            <ViewProductsByCategory/>
            <br/><br/>
          </div>


    );
  }
}

export default AddProduct;