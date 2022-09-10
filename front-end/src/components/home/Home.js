import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Home.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
  const [facilities, setFacilities] = useState([])
  useEffect(() => {
    if (sessionStorage.token) {
      let token = sessionStorage.token
      let headers = {}
      headers = { 'Authorization': `Basic ${token}` }
      axios.get('http://localhost:5000/owner/', { headers }).then((res) => {
        console.log(res.data)
        setFacilities(res.data.facilities)

      }).catch(error => {
        console.log(error)
      })
    }

  }, [])
  return (
    <Row>
      {
        facilities.map((facility, index) => {
          return (
            
              <Col xs={12} md={4}>
                <div className='box2'>
                  <h2>{`${facility.name}`}</h2>
                </div>
              </Col>
            
          )
        })
      }
    </Row>
  )
}

export default Home
