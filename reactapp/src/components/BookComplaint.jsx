import React, { Component } from 'react'
import ComplaintService from '../services/ComplaintService.js'
import ProductService from '../services/ProductService.js';
import Navigation from './Navigation.jsx';


const divStyle = {
  width: '100%',
  height: "100vh",
  backgroundImage: "url(/bg4.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: 'no-repeat'
};

class BookComplaint extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          apires:"",
          products: [],
          complaintName: "",
          status: "Open",
          client: { clientId: sessionStorage.getItem('id') },
          product: { modelNumber: "" },
          productName: "",
        };
             this.modelNumberHandler=this.modelNumberHandler.bind(this)
             this.complaintNameHandler=this.complaintNameHandler.bind(this)
             this.bookComplaint=this.bookComplaint.bind(this)
             this.productCategoryHandler=this.productCategoryHandler.bind(this)
             this.productNameHandler=this.productNameHandler.bind(this)
        }
    
    modelNumberHandler=(event) => {
      this.setState(prevState => {
        let product = {...prevState.product}           // creating copy of state variable product
        product.modelNumber = event.target.value      // update the name property, assign a new value                 
        return { product }                           // return new object product object
      })
    }

    complaintNameHandler=(event) => {
        this.setState({
                complaintName:event.target.value
        })
    }

    productCategoryHandler=(event) => {
      let category= event.target.value;
      console.log(category);
      ProductService.getProduct(category).then((res) =>{
        this.setState({
          products:res.data
        });
      })
    }

    productNameHandler=(event) =>{
        this.setState({
          product:{modelNumber:event.target.value}
        })
    }

    bookComplaint = (e) => {
      e.preventDefault();
      let complaint = {
        complaintName:this.state.complaintName,
        status:this.state.status,
        client:{clientId:this.state.client.clientId},
        product:{modelNumber:this.state.product.modelNumber},
      };
      console.log(JSON.stringify(complaint));
      ComplaintService.bookComplaints(complaint).then((res) => {
        this.setState({ apires: res.data });
        if(this.state.apires==='success'){
          alert('Complaint Registered successfully');
        console.log(res);
        this.props.history.push("/changestatus-client");
        }
        else{
          alert(this.state.apires);
        }
      });
    };

    render() {
        return (
          <div  style={divStyle}>
        <Navigation/>
        <p className="pt-3"></p>
        <br/>
        <div
          className="card col-md-6 mx-auto  mt-5 text-white"
          border="warning"
          style={{ opacity: 0.7, fontWeight: "bold", fontSize: 18, backgroundColor:'black'}}
        >
          <h1 className="card-title text-center text-info">
            <b>Book Complaint</b>
          </h1>

            <form
              onSubmit={this.bookComplaint}>
              <div className="form-group pt-3">
              <div className="row py-1 justify-content-center">
                <div className="col-4">
                  <label htmlFor="prod_cat" className="form-label text-start">
                    Product Category
                  </label>
                </div>
                <div className="col-6">
                  <select
                     placeholder="Select Product Category"
                     name="prod_cat"
                     className="form-control"
                     title="Enter Product Category"
                    onChange={this.productCategoryHandler}
                    required
                  >
                    <option selected>
                      {" "}
                      &nbsp;&nbsp;Select Product Category;&nbsp;&nbsp;{" "}
                    </option>
                    <option value="AC">AC</option>
                    <option value="Cooler">Cooler</option>
                    <option value="Fridge">Fridge</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Mobile">Mobile</option>
                    <option value="TV">TV</option>
                  </select>
                </div>
              </div>

              <div className="row py-1 my-3 g-2 justify-content-center">
                <div className="col-4">
                  <label htmlFor="ProdName" className="form-label text-start">
                    Product Name
                  </label>
                </div>
                <div className="col-6">
                  <select
                    placeholder="Select Product Category"
                    name="product category"
                    className="form-control"
                    title="Enter Product Category"
                    onChange={this.productNameHandler}
                    required
                  >
                    <option selected>
                      {" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;Select Product
                      Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    </option>
                    {this.state.products.map((prod) => (
                      <option value={prod.modelNumber}>
                        {prod.productName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row py-1 my-3 g-2 justify-content-center">
                <div className="col-4">
                  <label htmlFor="ProdIssue" className="form-label text-end">
                    Problem Description
                  </label>
                </div>
                <div className="col-6">
                  <input
                    id="ProdIssue"
                    type="text"
                    placeholder="ex: Cooler Fan Not Working"
                    name="Issue"
                    className="form-control"
                    value={this.state.complaintName}
                    onChange={this.complaintNameHandler}
                    required
                  />
                </div>
              </div>
              </div>
            <div className="row pb-3 pt-3 justify-content-center">
              <div className="col-10">
              <button className="btn btn-info btn-block " type="submit">
                Book Complaint
              </button>
              </div>
            </div>
              
          </form>
        </div>
        </div>
            

        )
    }
}

export default BookComplaint;
