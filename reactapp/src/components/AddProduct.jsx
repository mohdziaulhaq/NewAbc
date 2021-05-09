import React, { Component } from "react";
import ProductService from "../services/ProductService";
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
    return "Add Product";
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
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div
              style={{ backgroundColor: "#F2FEFF" }}
              className=" card col-md-6 offset-md-3 offset-md-3"
            >
              <center> {this.getTitle()}</center>
              <div className="card-body">
                <form onSubmit={this.addProduct}>
                  <div className="form-group">
                    <label> ProductName </label>
                    <input
                      type="text"
                      placeholder="productName"
                      name="productname"
                      title="Must contain only characters and size should be between 2 to 30"
                      className="form-control"
                      value={this.state.productName}
                      onChange={this.changeProductNameHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label> ModelNumber </label>
                    <input
                      type="text"
                      placeholder="modelNumber"
                      name="modelnumber"
                      className="form-control"
                      value={this.state.modelNumber}
                      onChange={this.changeModelNumberHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label> ProductCategoryName </label>
                    <input
                      type="text"
                      placeholder="categoryName"
                      name="categoryname"
                      title="Must contain only characters and size should be between 2 to 30"
                      className="form-control"
                      value={this.state.categoryName}
                      onChange={this.changeProductCategoryNameHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> WarrentyYear </label>
                    <input
                      type="text"
                      placeholder="year"
                      name="warrantyyear"
                      className="form-control"
                      value={this.state.warrantyYear}
                      onChange={this.changeWarrantyYearHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> WarrantyDate </label>
                    <input
                      type="text"
                      placeholder="date"
                      name="warrantydate"
                      title="Must contain only characters and size should be between 2 to 30"
                      className="form-control"
                      value={this.state.warrantyDate}
                      onChange={this.changeWarrantyDateHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> DateOfPurchase </label>
                    <input
                      type="text"
                      placeholder="purchaseDate"
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
        </div>
      </div>
    );
  }
}

export default AddProduct;
