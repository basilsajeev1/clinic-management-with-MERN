import React from 'react'
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const LoginHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link >Contact</Nav.Link>
          <Nav.Link >Request Demo</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
        <NavDropdown title="Register" id="basic-nav-dropdown">
            <NavDropdown.Item >Patient</NavDropdown.Item>
            <NavDropdown.Item ><Link to="/registerOwner" style={{ textDecoration: 'inherit' }} >Owner</Link></NavDropdown.Item>
            <NavDropdown.Item >Doctor</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link><Link to="/" style={{ textDecoration: 'none' }}>Login </Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default LoginHeader
