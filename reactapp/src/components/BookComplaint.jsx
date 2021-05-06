import React, { Component } from 'react'
import ComplaintService from '../services/ComplaintService.js'
import ProductService from '../services/ProductService.js';

const divStyle = {
  height: '100vh',
  backgroundImage: "url(/bg2.jpg)",
  backgroundSize: 'cover',
  float: 'right'
};

class BookComplaint extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                 products:[],
                 complaintName:'',
                 status:'Open',
                 client:{clientId:5},
                 product:{modelNumber:''},
                 productName:''
             }
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
        console.log(JSON.stringify(this.state.products));
      })
    }

    productNameHandler=(event) =>{
        this.setState({
          product:{modelNumber:event.target.value}
        })
        console.log(event.target.value)
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
        alert('Complaint Registered successfully');
        console.log(res);
        this.props.history.push("/");
      });
    };

    render() {
        return (
          <div className="container-fluid"  style={divStyle}>
            <p className="py-5"></p>
            <div className="card col-md-6 offset-md-3 offset-md-3 pt-3 alert-primary">
              <h1 className="card-title text-center "><b>Book Complaint</b></h1>
                <form onSubmit={this.bookComplaint}>
                <div className="form-group ">
                  <div className="container">

                    <div className="row g-2 pt-5">
                      <div className="col-5">
                        <label htmlFor="prod_cat" className="form-label text-start fs-1">Product Category:       
                        </label>
                      </div>
                      <div className="col-6">
                        <select   class="form-select  mb-3" id="prod_cat" aria-label=".form-select-lg example" onChange={this.productCategoryHandler}>
                            <option selected>  &nbsp;&nbsp;&nbsp;Select Product Category&nbsp;&nbsp;&nbsp;  </option>
                            <option value="AC">AC</option>
                            <option value="Cooler">Cooler</option>
                            <option value="Fridge">Fridge</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Mobile">Mobile</option>
                            <option value="TV">TV</option>
                        </select>
                      </div>
                    </div>

                    <div className="row g-2 form-group pt-3">
                        <div className="col-5">
                          <label htmlFor="ProdName" className="form-label text-start">Product Name     
                          </label>
                        </div>
                        <div className="col-6">
                          
                          <select   class="form-select  mb-3" id="prodName" aria-label=".form-select-lg example" onChange={this.productNameHandler} required>
                            <option selected>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select Product Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </option>
                            {this.state.products.map((prod) => (
                            <option value={prod.modelNumber}>{prod.productName}</option> 
                            ))}          
                          </select>
                        </div>
                    </div>

                    <div className="row g-2 form-group pt-3">
                        <div className="col-5">
                          <label htmlFor="ProdIssue" className="form-label text-start">Problem Description     
                          </label>
                        </div>
                        <div className="col-6">
                          <input id="ProdIssue" type="text" placeholder="ex: Cooler Fan Not Working" name="Issue" className="form-control" value={this.state.complaintName} onChange={this.complaintNameHandler}  required />
                        </div>
                    </div>

                      <button className="btn btn-success row align-items-center" type="submit">
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