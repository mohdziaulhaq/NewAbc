import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p style={{ paddingBottom: '70px' }}></p>
        <footer style={{ backgroundColor: 'black' ,overflow: 'auto', }} className="footer fixed-bottom ">
          <div className="col py-2">
            <center>
              <span className="text-light">Copyright © 2021 ABC Electronics. All rights reserved.</span>
            </center>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
