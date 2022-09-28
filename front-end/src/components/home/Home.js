import axios from 'axios'
import React, { useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import styles from './Home.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
  const [facilities, setFacilities] = useState([])
  const navigate= useNavigate();
  useEffect(() => {
    
    if (sessionStorage.token) {
      let token = sessionStorage.token
      let headers = {}
      headers = { 'Authorization': `Bearer ${token}` }
      axios.get('http://localhost:5000/owner/', { headers }).then((res) => {
        console.log(res.data)
        setFacilities(res.data.facilities)

      }).catch(error => {
        console.log(error)
        // navigate('/')
      })
    }else{
      navigate('/')
    }

  }, [])
  return (
    <>
    <Link to="/owner/addClinic" >Add Facility</Link>
    <Row>
      {
        facilities.map((facility, index) => {
          return (
            
              <Col xs={12} lg={4}>
                <div className={styles.box}>
                  <h2>{`${facility.name}`}</h2>
                  <img className={styles.facLogo} src={`http://localhost:5000/images/facilityimages/${facility.logo}`} alt="logo"  />
                  <Row>
                    <Col><p>Location</p></Col>
                    <Col><p>{`${facility.location}`}</p></Col>
                  </Row>
                  
                  <Row>
                    <Col><p>Email</p></Col>
                    <Col><p>{`${facility.email}`}</p></Col>
                  </Row>
                  <Link to="">View Facility</Link> &nbsp;
                  <Link to={{ pathname:`/owner/editclinic/${facility._id}`}}>Edit</Link> &nbsp;
                  <Link to="">Delete</Link>

                </div>
              </Col>
            
          )
        })
      }
    </Row>
    </>
  )
}

export default Home
