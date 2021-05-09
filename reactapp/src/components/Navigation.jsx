import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
export class Navigation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:sessionStorage.getItem('id')
        }
    }
    
    render() {
        return (
                (sessionStorage.getItem('role')==='engineer')?

                //Engineer Navigation Bar

                (<Navbar bg="dark" variant="dark">
                        <Navbar.Brand className="pl-4" href="/homepage-client"><img src="/abc.png" height="25" width="45"/></Navbar.Brand>
                        <NavDropdown id="basic-nav-dropdown">
                            <NavDropdown.Item href="/homepage-engineer">Home</NavDropdown.Item>
                            <NavDropdown.Item href="/engineer-profile">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/change-status">My Complaints</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                          </NavDropdown>
                        <Nav className="mr-auto">
                           <Nav.Link href="/homepage-engineer">Home</Nav.Link>
                           <Nav.Link href="/engineer-profile">My Profile</Nav.Link>
                           <Nav.Link href="#pricing">Pricing</Nav.Link>
                           <Nav.Link href="/change-status">My Complaints</Nav.Link>
                        </Nav>
                        <Form inline>
                          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                          <Button variant="outline-success" className="mr-2">Search</Button>
                        </Form>
                        <Navbar.Brand className="mx-sm-2" href="/">Logout</Navbar.Brand>
                </Navbar>)
                :(sessionStorage.getItem('role')==='client'?

                //Client Navigation Bar

                (<Navbar className="pt-5" bg="dark" variant="dark">
                            <Navbar.Brand className="pl-4" href="/homepage-client"><img src="/abc.png" height="25" width="45"/></Navbar.Brand>
                            <NavDropdown id="basic-nav-dropdown">
                                <NavDropdown.Item href="/homepage-client">Home</NavDropdown.Item>
                                <NavDropdown.Item href="/client-profile">My Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/change-status">My Complaints</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                              </NavDropdown>
                            <Nav className="mr-auto">
                               <Nav.Link href="/homepage-client">Home</Nav.Link>
                               <Nav.Link href="/client-profile">My Profile</Nav.Link>
                               <Nav.Link href="#pricing">Pricing</Nav.Link>
                               <Nav.Link href="/change-status">My Complaints</Nav.Link>
                            </Nav>
                            <Form inline>
                              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                              <Button variant="outline-success" className="mr-2">Search</Button>
                            </Form>
                            <Navbar.Brand className="mx-sm-2" href="/">Logout</Navbar.Brand>
                </Navbar>):
                 
                 //Admin Navigation Bar
                 
                (<Navbar className="pt-5" bg="dark" variant="dark">
                            <Navbar.Brand className="pl-4" href="/homepage-admin"><img src="/abc.png" height="25" width="45"/></Navbar.Brand>
                            <NavDropdown id="basic-nav-dropdown">
                                <NavDropdown.Item href="/homepage-admin">Home</NavDropdown.Item>
                                <NavDropdown.Item href="/admin-profile">My Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/change-status">View All Complaints</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                              </NavDropdown>
                            <Nav className="mr-auto">
                               <Nav.Link href="/homepage-admin">Home</Nav.Link>
                               <Nav.Link href="/admin-profile">My Profile</Nav.Link>
                               <Nav.Link href="#pricing">Pricing</Nav.Link>
                               <Nav.Link href="/change-status">View All Complaints</Nav.Link>
                            </Nav>
                            <Form inline>
                              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                              <Button variant="outline-success" className="mr-2">Search</Button>
                            </Form>
                            <Navbar.Brand className="mx-sm-2" href="/">Logout</Navbar.Brand>
                </Navbar>))
        )
    }
}

export default Navigation