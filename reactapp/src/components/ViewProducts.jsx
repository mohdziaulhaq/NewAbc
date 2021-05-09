import React, { Component } from 'react';
class ViewProducts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products:[]
         };
    }

    componentDidMount() {
        ComplaintService.getClientComplaints(this.state.client).then((res) => {
          this.setState({
            complaints: res.data,
          });
        });
      }
    
      buttonHandler(complaintId) {
        ClientService.changeStatusClient(complaintId).then((res) => {
          alert(res.data);
        });
        window.location.reload(false);
      }
    
    render() { 
        return ( <></> );
    }
}
 
export default ViewProducts;