import React from 'react'
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './loginHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons'

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
          <NavDropdown className={styles.select} title={<><span className={styles.links}>Register <FontAwesomeIcon icon={faAngleDown} /></span></>} >
            <NavDropdown.Item >Patient</NavDropdown.Item>
            <NavDropdown.Item ><Link className={`${styles.link} ${styles.dropItem}`} to="/registerOwner" >Owner</Link></NavDropdown.Item>
            <NavDropdown.Item >Doctor</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link ><Link className={styles.links} to="/" ><FontAwesomeIcon icon={faRightToBracket} className="me-1"/>Login </Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>

  )
}

export default LoginHeader
