import React from 'react';

const Header = () => (
  <header className="">
    <div className=" text-center">
      <h2 style={{ backgroundColor: 'black', color: 'white', fontFamily: 'fantasy' }} className="col py-2 fixed-top">
        ABC Electronics Complaint Portal
      </h2>
      <p style={{ paddingTop: '50px' }}></p>
      <div className="alert alert-secondary alert-dismissible fade show" role="alert">
      In accordance with the latest Government guidelines on <strong>COVID-19</strong>, our services will be restricted in some locations
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      
    </div>
    </div>
  </header>
);

export default Header;
