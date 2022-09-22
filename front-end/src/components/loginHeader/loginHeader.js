import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './loginHeader.module.css'

const LoginHeader = () => {
  return (
    <Navbar className={styles.container} bg="white" expand="lg">
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className={styles.links} >Contact</Nav.Link>
          <Nav.Link className={styles.links}>Request Demo</Nav.Link>
        </Nav>
        <Nav  >
          <NavDropdown  title={<span className={styles.links}>Register</span>} >
            <NavDropdown.Item >Patient</NavDropdown.Item>
            <NavDropdown.Item ><Link className={`${styles.link} ${styles.dropItem}`} to="/registerOwner" >Owner</Link></NavDropdown.Item>
            <NavDropdown.Item >Doctor</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className={styles.links}><Link className={styles.link} to="/" >Login </Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>

  )
}

export default LoginHeader
