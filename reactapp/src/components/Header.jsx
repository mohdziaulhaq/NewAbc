import React from 'react';
import Image from 'react-bootstrap/Image';



const divStyle = {
  width: '100%',
  height: '100vh',
};
const Header = () => (
  <header >
    <div className=" text-center">
    <div className="header card text-center fixed-top" style={{opacity: 0.9, fontWeight: "bold", fontSize: 30, backgroundColor:'black', color:'white'}}><span><img src="/abc.png" height="40" width="75"/> &nbsp;Electronics Complaints Portal</span></div> 
    </div>
    
  </header>
);

export default Header;
