import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const focusOutEmail = ()=>{
    
    if(!email.match(/\S/)){
      document.getElementById("email").style.borderColor="red";
      document.getElementById("email").placeholder="Email";
      document.getElementById("labelEmail").style.display="none";
      document.getElementById("email").classList.add(styles.red);
    }else{
      document.getElementById("email").style.borderColor="rgba(0,0,0,.12)";
      
    }
  }
  const focusOutPassword = ()=>{
    if(!password.match(/\S/)){
    document.getElementById("password").style.borderColor="red";
    document.getElementById("password").placeholder="Password";
    document.getElementById("labelPassword").style.display="none";
    document.getElementById("password").classList.add(styles.red);
    }else{
      document.getElementById("password").style.borderColor="rgba(0,0,0,.12)";
      
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const loginData = {
      "email": email,
      "password": password
    }
    await axios.post('http://localhost:5000/login', loginData).then((res) => {
      if (res) {
        console.log(res.data.token)
        sessionStorage.setItem("token", res.data.token)
        navigate('/owner/home')
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className={styles.body}>
      <div className={styles.box}>

        <div className={styles.top}>
          <button className={styles.topbutton1}>Login</button>
          <button className={styles.topbutton2}>Patient Login</button>
        </div>
        <img className={styles.logo} src='https://keralatrading.com/tp/assets/images/treatpatientlogo.png' alt='logo'></img>
        <span className={styles.span}>Clinic Login</span>
        <form onSubmit={handleSubmit}>
          <div className={styles.textOnInput}>
            <label id="labelEmail">Email</label><input type='email' required={true} autoComplete='off' className={styles.inputs} id='email' placeholder='Enter you email address'
              value={email} onChange={(e) => { setEmail(e.target.value) }} onBlur={focusOutEmail}></input>
          </div>
          <div className={styles.textOnInput}>
          <label id="labelPassword">Password</label><input type='password' required={true} autoComplete='off' className={styles.inputs} id='password' placeholder='Enter your password'
            value={password} onChange={(e) => { setPassword(e.target.value) }} onBlur={focusOutPassword}></input>
          </div>
          <div className={styles.rememberdiv}>
          <input type="checkbox" className={styles.check} name="remember" value="remember"></input>
          <label for="remember" className={styles.remember}>Remember Me</label><br></br>
          </div>
          <button type='submit' className={styles.logbtn} >Login</button>
          <label className={styles.forgot}><Link className={styles.link} to="#">Forgot Password?</Link></label>
        </form>
      </div>
    </div>
  )
}

export default Login;
