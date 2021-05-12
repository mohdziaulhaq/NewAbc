import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import Navigation from './Navigation'
const cardalign={
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#00353b',
  width: '30%',
  fontWeight: 'bold',
  opacity: 0.8
}

const divStyle = {
    paddingBottom:'80px',
    backgroundImage: "url(/bg-6.jpg)",
    backgroundSize: "cover",
  }
const image={
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
    width:230,
    height:230
}

const alignm={
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}
export class ViewEngineerProfile extends Component {
    render() {
        return (
            <div style={divStyle}>
                <Navigation/>
                <p className="pt-2"></p>
                <Card  style={cardalign} border="dark" text="dark" >
                    <Card.Img variant="top" src="/profile.png" style={image}/>
                    <Card.Body>
                        <Card.Title className="pr-3 text-light"><span >Name: &nbsp;</span>{sessionStorage.getItem('name')}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush" > 
                       <ListGroupItem><span className="pr-4">Engineer ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{sessionStorage.getItem('id')}  </ListGroupItem>
                       <ListGroupItem><span className="pr-4">Engineer Name:</span>{sessionStorage.getItem('engineerName')}  </ListGroupItem>
                       <ListGroupItem><span className="pr-5">Domain:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{sessionStorage.getItem('domain')}</ListGroupItem>
                       
                    </ListGroup>
                </Card>
            </div>
        )
    }
}

export default ViewEngineerProfile