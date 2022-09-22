import React, { useState } from 'react'
import styles from './Signup.module.css'
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
      sessionStorage.setItem("token", res.data.token)
      navigate('/owner/home')
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
   
  return (
    <div className={styles.box}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h4 className={styles.title}>Owner Registration</h4>
        <input className={styles.input} type="text" name='name' autoComplete='off' required='true' placeholder='Name'
         value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
        <input className={styles.input} type="mobile" name='mobile' autoComplete='off' required='true' placeholder='Mobile' 
        value={mobile} onChange={(e)=>setMobile(e.target.value)}></input><br></br>
        <input className={styles.input} type="email" name='email' autoComplete='off' required='true' placeholder='Email' 
        value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
        <input className={styles.input} type="password" name='password' autoComplete='off' required='true' placeholder='Password' 
        value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
        <input className={styles.input} type="password" autoComplete='off' required='true' placeholder='Confirm Password' ></input><br></br>
        <textarea className={styles.address}  name='address' autoComplete='off' required='true' placeholder='Address' 
        value={address} onChange={(e)=>setAddress(e.target.value)}></textarea><br></br>

        <button type='Submit' className={styles.submitbtn}>Sign Up</button>
      </form>
      
    </div>
  )
}

export default Signup
