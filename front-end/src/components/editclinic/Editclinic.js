import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import styles from './Editclinic.module.css'


const Editclinic = () => {
  const [facility, setFacility] = useState({})
  const { clinicId } = useParams();
  //console.log(clinicId)
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.token) {
      let token = sessionStorage.token
      let headers = {}
      headers = { 'Authorization': `Bearer ${token}` }
      axios.get(`http://localhost:5000/owner/getClinic/${clinicId}`, { headers }).then((res) => {
        //console.log(res.data)
        setFacility(res.data.facility)
        //console.log(res.data.facility)
      }).catch((err) => {
        console.log(err)
        navigate('/')
      })
    } else {
      navigate('/')
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', facility.name);
    formData.append('location', facility.location);
    formData.append('pincode', facility.pincode);
    formData.append('facType', facility.facType);
    formData.append('regNumber', facility.regNumber);
    formData.append('email', facility.email);
    formData.append('workHours', facility.workHours);
    formData.append('startPatRegNumber', facility.startPatRegNumber);
    formData.append('category', facility.category);
    formData.append('appType', facility.appType);
    formData.append('gstNumber', facility.gstNumber);
    formData.append('address', facility.address);
    formData.append('logo', facility.fileName);
    //console.log(name)
    //console.log(formData)
    if (sessionStorage.token) {
      let token = sessionStorage.token
      let headers = {}
      headers = { 'Authorization': `Bearer ${token}` }
      // console.log("facility is" + JSON.stringify(facility.name));
      // console.log("formdata is" + JSON.stringify(formData));
      await axios.put(`http://localhost:5000/owner/updateClinic/${clinicId}`, formData, { headers }).then((res) => {
        if (res) {
          console.log(res.data);
          navigate('/owner/home')
        }
      }).catch((err) => {
        console.log(err)
        navigate('/')
      })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <div className='container'>
        <form encType='multipart/form-data' onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>Facility name</label>  <input className={styles.input} type="text" value={facility.name} onChange={(e) => setFacility({ ...facility, "name": e.target.value })}></input><br></br>
            </div></Col>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>Location</label>  <input className={styles.input} type="text" value={facility.location} onChange={(e) => setFacility({ ...facility, "location": e.target.value })}></input><br></br>
            </div></Col>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>Pincode</label>  <input className={styles.input} type="text" value={facility.pincode} onChange={(e) => setFacility({ ...facility, "pincode": e.target.value })} ></input><br></br>
            </div></Col>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>Facility Type</label>  <select className={styles.input} value={facility.facType} onChange={(e) => setFacility({ ...facility, "facType": e.target.value })} ><option value="Clinic">Clinic</option>  <option value="Hospital">Hospital</option></select><br></br>
            </div></Col>
          </Row>
          <Row>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>Registration Number</label>  <input className={styles.input} type="text" value={facility.regNumber} onChange={(e) => setFacility({ ...facility, "regNumber": e.target.value })}></input><br></br>
            </div></Col>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>Email</label>  <input className={styles.input} type="email" value={facility.email} onChange={(e) => setFacility({ ...facility, "email": e.target.value })}></input><br></br>
            </div></Col>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>Working Hours</label>  <input className={styles.input} type="number" value={facility.workHours} onChange={(e) => setFacility({ ...facility, "workHours": e.target.value })}></input><br></br>
            </div></Col>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>Starting Patient Registration Number</label>  <input className={styles.input} type="text" value={facility.startPatRegNum} onChange={(e) => setFacility({ ...facility, "regNumstartPatRegNumber": e.target.value })}></input><br></br>
            </div></Col>
          </Row>
          <Row>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>Category</label>  <select className={styles.input} value={facility.category} onChange={(e) => setFacility({ ...facility, "category": e.target.value })}><option value="Allopathy">Allopathy</option>  <option value="Homeopathy">Homeopathy</option></select><br></br>
            </div></Col>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>Appoinment Type</label>  <select className={styles.input} value={facility.appType} onChange={(e) => setFacility({ ...facility, "appType": e.target.value })}><option value="Clinic Level">Clinic Level</option>  <option value="Doctor Level">Doctor Level</option></select><br></br>
            </div></Col>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>GST Number</label>  <input className={styles.input} type="text" value={facility.gstNum} onChange={(e) => setFacility({ ...facility, "gstNum": e.target.value })}></input><br></br>
            </div></Col>
            <Col xs={12} md={3}><div className={styles.textOnInput}>
              <label>Address</label>  <textarea className={styles.input} value={facility.address} onChange={(e) => setFacility({ ...facility, "address": e.target.value })}></textarea><br></br>
            </div></Col>
          </Row>
          <Row >
            <Col className={styles.label1}>
            <label>Logo</label>
            </Col>
          </Row>
          <Row >
            <Col className={styles.label1}>
            <input name="logo" type="file" onChange={(e) => setFacility({ ...facility, "fileName": e.target.files[0] })}></input><br></br>
            </Col>
          </Row>
          <Row>
            <Col className={styles.label1}>
            <label >Previous Image</label>
            </Col>
          </Row>
          <Row >
            <Col className={styles.label1}>
            <img className={styles.logo} src={`http://localhost:5000/images/facilityimages/${facility.logo}`} alt="logo" />
            </Col>
          </Row>
          <Row>
            <Col className={styles.button}>
              <button type='submit'>Submit</button>
            </Col>
            <Col>
              <button>Cancel</button>
            </Col>
          </Row>
        </form>
      </div>
    </>
  )
}

export default Editclinic
