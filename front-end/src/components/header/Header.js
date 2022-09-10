import axios from 'axios'
import React from 'react'
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate= useNavigate();
  const logout = async()=>{
     await axios.get('http://localhost:5000/logout').then((res)=>{
      console.log(res.data)
      sessionStorage.removeItem("token")
      navigate('/')
     }).catch((err)=>{
      console.log(err)
     })
  }
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link ><Link to="/owner/home" style={{ textDecoration: 'none' }} >Home</Link></Nav.Link>
          
        </Nav>
        <Nav className="ms-auto">
        
          <Nav.Link><Link to="/logout" style={{ textDecoration: 'none' }} onClick={logout}>Logout</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header
