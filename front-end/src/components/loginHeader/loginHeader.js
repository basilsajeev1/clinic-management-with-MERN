import React from 'react'
import {Link} from "react-router-dom"

const LoginHeader = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item mx-2">
                <a class="nav-link " aria-current="page" href="#">Contact</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#">Request Demo</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown mx-2">
                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                  Register
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">
                    
                    Patient
                    
                    </a></li>
                  <li><a class="dropdown-item" href="#">
                  <Link to="/registerOwner">
                    Owner
                    </Link>
                    </a></li>
                  
                  <li><a class="dropdown-item" href="#">Doctor</a></li>
                </ul>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link">
                <Link to="/">
                  Login
                  </Link>
                  </a>
                
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  )
}

export default LoginHeader
