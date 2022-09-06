import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const Signup = () => {
  const [name, setName]= useState('')
  const [mobile, setMobile]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [address, setAddress]= useState('')
  const navigate = useNavigate();
  const handleSubmit= async(e)=>{
    
    e.preventDefault()
    const userData = {
      "name": name,
      "mobile": mobile,
      "email": email,
      "password": password,
      "address": address
    }
    
    await axios.post('http://localhost:5000/register/', userData).then((res)=>{
      if(res){
      console.log(res.data);
      
      navigate('/owner/home')
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
   
  return (
    <div class="box">
      <form class='form' onSubmit={handleSubmit}>
        <h4 class="title">Owner Registration</h4>
        <input class="input" type="text" name='name' autoComplete='off' required='true' placeholder='Name'
         value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
        <input class="input" type="mobile" name='mobile' autoComplete='off' required='true' placeholder='Mobile' 
        value={mobile} onChange={(e)=>setMobile(e.target.value)}></input><br></br>
        <input class="input" type="email" name='email' autoComplete='off' required='true' placeholder='Email' 
        value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
        <input class="input" type="password" name='password' autoComplete='off' required='true' placeholder='Password' 
        value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
        <input class="input" type="password" autoComplete='off' required='true' placeholder='Confirm Password' ></input><br></br>
        <textarea class="address"  name='address' autoComplete='off' required='true' placeholder='Address' 
        value={address} onChange={(e)=>setAddress(e.target.value)}></textarea><br></br>

        <button type='Submit' class='submitbtn'>Sign Up</button>
      </form>
      
    </div>
  )
}

export default Signup
