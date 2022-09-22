import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
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
          <button className={styles.topbutton}>Login</button>
          <button className={styles.topbutton}>Patient Login</button>
        </div>
        <img className={styles.logo} src='https://keralatrading.com/tp/assets/images/treatpatientlogo.png' alt='logo'></img>
        <span className={styles.span}>Clinic Login</span>
        <form onSubmit={handleSubmit}>
          <div className={styles.textOnInput}>
            <label>Email</label><input type='email' required={true} autoComplete='off' className={styles.inputs} name='email' placeholder='Enter you email address'
              value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
          </div>
          <div className={styles.textOnInput}>
          <label>Password</label><input type='password' required={true} autoComplete='off' className={styles.inputs} name='password' placeholder='Enter your password'
            value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
          </div>
          <div className={styles.rememberdiv}>
          <input type="checkbox"  name="remember" value="remember"></input>
          <label for="remember" className={styles.remember}> Remember Me</label><br></br>
          </div>
          <button type='submit' className={styles.logbtn} >Login</button>
          <label className={styles.forgot}><Link className={styles.link} to="#">Forgot Password?</Link></label>
        </form>
      </div>
    </div>
  )
}

export default Login;
