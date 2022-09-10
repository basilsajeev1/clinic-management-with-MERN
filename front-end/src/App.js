import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup/signup";
import LoginPage from "./pages/login/login";
import HomePage from './pages/home/home'
import LogoutPage from './pages/logout/logout'



function App() {
  return (
    
    <div> 
      <BrowserRouter>     
      <Routes >
      <Route exact path="/" element={<LoginPage/>} />
      <Route path="/registerOwner" element={<SignupPage/>} />
      <Route exact path="/owner/home" element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    </div>
    
  )
}

export default App;
