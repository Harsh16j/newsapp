import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavBar extends Component {
  render() {
    return (
      
        <Navbar bg="light" expand="lg">
            
      {/* <Container style={{ width: "100%" }}> - No need as it centers the navbar*/}
        <Navbar.Brand href="#home">NewsMonkey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
      
    )
  }
}
