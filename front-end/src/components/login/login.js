import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.css'
// import swal from 'sweetalert';
import Swal from 'sweetalert2'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const focusOutEmail = () => {

    if (!email.match(/\S/)) {
      document.getElementById("email").style.borderColor = "red";
      // document.getElementById("email").placeholder="Email";
      // document.getElementById("labelEmail").style.display="none";
      document.getElementById("email").classList.add(styles.red);
      document.getElementById("reqEmail").classList.add(styles.reqEmailShow)
    } else {
      document.getElementById("email").style.borderColor = "rgba(0,0,0,.12)";
      document.getElementById("reqEmail").classList.add(styles.reqEmailHide)

    }
  }
  const focusOutPassword = () => {
    if (!password.match(/\S/)) {
      document.getElementById("password").style.borderColor = "red";
      // document.getElementById("password").placeholder="Password";
      // document.getElementById("labelPassword").style.display="none";
      document.getElementById("password").classList.add(styles.red);
      document.getElementById("reqPassword").classList.add(styles.reqPasswordShow)
    } else {
      document.getElementById("password").style.borderColor = "rgba(0,0,0,.12)";
      document.getElementById("reqPassword").classList.add(styles.reqPasswordHide)

    }
  }
  const hideWarning = () => {
    if (email.match(/\S/)) {
      document.getElementById("reqEmail").classList.add(styles.reqEmailHide)
    }

    if (password.match(/\S/)) {
      document.getElementById("reqPassword").classList.add(styles.reqPasswordHide)
    }

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const loginData = {
      "email": email,
      "password": password
    }
    await axios.post('http://localhost:5000/login', loginData).then((res) => {
      if (res.data.token) {
        console.log(res.data.token)
        sessionStorage.setItem("token", res.data.token)
        navigate('/owner/home')
      } else {

        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Bad Credentials',
          width: '300px',
          heightAuto: 'false',
          confirmButtonColor: '#3085d6',

        })


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
          <div className={styles.textOnInput1}>
            <label id="labelEmail">Email</label><input type='email' required={true} autoComplete='off' className={styles.inputs1} id='email' placeholder='Enter you email address'
              value={email} onChange={(e) => { setEmail(e.target.value); hideWarning() }} onBlur={focusOutEmail} ></input>
          </div>

          <label id="reqEmail" class={styles.reqLabel1} >Email is required</label>

          <div className={styles.textOnInput2}>
            <label id="labelPassword">Password</label><input type='password' required={true} autoComplete='off' className={styles.inputs2} id='password' placeholder='Enter your password'
              value={password} onChange={(e) => { setPassword(e.target.value); hideWarning() }} onBlur={focusOutPassword}></input>
          </div>

          <label id="reqPassword" className={styles.reqLabel2}>Password is required</label>

          <div className={styles.bottom}>
            <div className={styles.rememberdiv}>
              <input type="checkbox" className={styles.check} name="remember" value="remember"></input>
              <label for="remember" className={styles.remember}>Remember Me</label><br></br>
            </div>
            <button type='submit' className={styles.logbtn} >Login</button>
            <label className={styles.forgot}><Link className={styles.link} to="#">Forgot Password?</Link></label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
