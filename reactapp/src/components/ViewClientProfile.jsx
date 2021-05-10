import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import Navigation from './Navigation'
const cardalign={
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '30%'
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
export class ViewClientProfile extends Component {
    render() {
        return (
            
            <div>
                <Navigation/>
                <Card className="my-3" style={cardalign} border="dark" bg="light" text="dark" >
                    <Card.Img variant="top" src="/profile.png" style={image}/>
                    <Card.Body>
                        <Card.Title><span className="pr-4">Name: </span>{sessionStorage.getItem('name')}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush" > 
                       <ListGroupItem><span className="pr-4">{sessionStorage.getItem('role')} ID:</span>{sessionStorage.getItem('id')}  </ListGroupItem>
                       <ListGroupItem><span className="pr-4">Address:</span>{sessionStorage.getItem('address')}</ListGroupItem>
                       <ListGroupItem><span className="pr-4">Mobile:&nbsp;</span> {sessionStorage.getItem('phone')}</ListGroupItem>
                       <ListGroupItem><Button href="/client-update" style={alignm}>Update Profile</Button></ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    }
}

export default ViewClientProfile