import axios from 'axios'
import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const[email,setEmail]= useState('')
  const[password, setPassword]= useState('')
  const navigate= useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const loginData={
      "email": email,
      "password": password
    }
    await axios.post('http://localhost:5000/login', loginData).then((res)=>{
      if(res){
      console.log(res.data)
      navigate('/owner/home')
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div class='box1'>
      
      <div className="top">
        <button class='topbutton'>Login</button>
        <button class='topbutton'>Patient Login</button>
      </div>
      <img class='logo' src='https://keralatrading.com/tp/assets/images/treatpatientlogo.png' alt='logo'></img>
      <form onSubmit={handleSubmit}>
      <input type='email' required='true' autoComplete='off' class='inputs' name='email' placeholder='Email' 
      value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
      <input type='password' required='true' autoComplete='off' class='inputs' name='password' placeholder='Password' 
      value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
      <button type='submit' class='logbtn' >Login</button>
      </form>
    </div>
  )
}

export default Login;
