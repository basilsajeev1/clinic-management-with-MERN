import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import styles from './AddClinic.module.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddClinic = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [pincode, setPincode] = useState('')
    const [facType, setFacType] = useState('')
    const [regNumber, setRegNumber] = useState('')
    const [email, setEmail] = useState('')
    const [workHours, setWorkHours] = useState('')
    const [startPatRegNumber, setStartPatRegNumber] = useState('')
    const [category, setCategory] = useState('')
    const [appType, setAppType] = useState('')
    const [gstNumber, setGstNumber] = useState('')
    const [address, setAddress] = useState('')
    const [fileName, setFileName] = useState()

    const navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault()
        const formData = new FormData();
            formData.append('name', name);
            formData.append('location', location);
            formData.append('pincode', pincode);
            formData.append('facType', facType);
            formData.append('regNumber', regNumber);
            formData.append('email', email);
            formData.append('workHours', workHours);
            formData.append('startPatRegNumber', startPatRegNumber);
            formData.append('category', category);
            formData.append('appType', appType);
            formData.append('gstNumber', gstNumber);
            formData.append('address', address);
            formData.append('logo', fileName);
            
        
            
        
        if (sessionStorage.token) {
            let token = sessionStorage.token
            let headers = {}
            headers = { 'Authorization': `Bearer ${token}` }
            
            await axios.post('http://localhost:5000/owner/addClinic', formData, { headers }).then((res) => {
                if (res) {
                    //console.log(res.data);
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
        <div className="container">
            <h3 className={styles.title}>Add Facility</h3>
            <form encType='multipart/form-data' onSubmit={handleSubmit}>
                <Row>
                    <Col xs={12} md={3}><input className={styles.input1} type="text" placeholder='Facility Name' autoComplete='off' required='true' onChange={(e) => setName(e.target.value)}></input></Col>
                    <Col xs={12} md={3}><input className={styles.input1} type="text" placeholder='Location' autoComplete='off' required='true' onChange={(e) => setLocation(e.target.value)}></input></Col>
                    <Col xs={12} md={3}><input className={styles.input1} type="number" placeholder='Pincode' autoComplete='off' required='true' onChange={(e) => setPincode(e.target.value)}></input></Col>
                    <Col xs={12} md={3}><select className={styles.input1} required='true' onChange={(e) => setFacType(e.target.value)}>
                        <option value="" disabled selected>Facility Type</option>
                        <option value="Clinic">Clinic</option>
                        <option value="Hospital">Hospital</option>
                    </select>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3}><input className={styles.input1} type="text" placeholder='Registration Number' autoComplete='off' required='true' onChange={(e) => setRegNumber(e.target.value)}></input></Col>
                    <Col xs={12} md={3}><input className={styles.input1} type="email" placeholder='Email' autoComplete='off' required='true' onChange={(e) => setEmail(e.target.value)}></input></Col>
                    <Col xs={12} md={3}><input className={styles.input1} type="number" placeholder='Working Hours' autoComplete='off' required='true' onChange={(e) => setWorkHours(e.target.value)}></input></Col>
                    <Col xs={12} md={3}><input className={styles.input1} type="text" placeholder='Starting Patient Registration Number' autoComplete='off' onChange={(e) => setStartPatRegNumber(e.target.value)}></input></Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}><select className={styles.input2} required='true' onChange={(e) => setCategory(e.target.value)}>
                        <option value="" disabled selected>Category</option>
                        <option value="Allopathy">Allopathy</option>
                        <option value="Homeopathy">Homeopathy</option>
                    </select></Col>
                    <Col xs={12} md={4}><select className={styles.input2} required='true' onChange={(e) => setAppType(e.target.value)}>
                        <option value="" disabled selected>Appointment Type</option>
                        <option value="Clinic Level">Clinic Level</option>
                        <option value="Doctor Level">Doctor Level</option>
                    </select></Col>
                    <Col xs={12} md={4}><input className={styles.input2} type="text" placeholder='GST Number' autoComplete='off' onChange={(e) => setGstNumber(e.target.value)} ></input></Col>

                </Row>
                <Row>
                    <Col><textarea placeholder='Address' className={styles.address} autoComplete='off' required='true' onChange={(e) => setAddress(e.target.value)}></textarea></Col>
                </Row>
                <Row>
                    <Col className={styles.logoTitle}><label >Facility Logo</label></Col>
                    <Col className={styles.logo}><input name="logo" type="file" onChange={(e)=>setFileName(e.target.files[0])}></input></Col>
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
    )
}

export default AddClinic
