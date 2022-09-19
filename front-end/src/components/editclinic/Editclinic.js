import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Editclinic = () => {
  const [facility, setFacility] = useState({})
  const { clinicId } = useParams();
  // const [name, setName] = useState()
  // const [location, setLocation] = useState('')
  // const [pincode, setPincode] = useState('')
  // const [facType, setFacType] = useState('')
  // const [regNumber, setRegNumber] = useState('')
  // const [email, setEmail] = useState('')
  // const [workHours, setWorkHours] = useState('')
  // const [startPatRegNumber, setStartPatRegNumber] = useState('')
  // const [category, setCategory] = useState('')
  // const [appType, setAppType] = useState('')
  // const [gstNumber, setGstNumber] = useState('')
  // const [address, setAddress] = useState('')
  // const [fileName, setFileName] = useState()
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
      })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <div className='container'>
        <form encType='multipart/form-data' onSubmit={handleSubmit}>
          <label>Facility name</label>  <input type="text" value={facility.name} onChange={(e) => setFacility({ ...facility, "name": e.target.value })}></input><br></br>
          <label>Location</label>  <input type="text" value={facility.location} onChange={(e) => setFacility({ ...facility, "location": e.target.value })}></input><br></br>
          <label>Pincode</label>  <input type="text" value={facility.pincode} onChange={(e) => setFacility({ ...facility, "pincode": e.target.value })} ></input><br></br>
          <label>Facility Type</label>  <select value={facility.facType} onChange={(e) => setFacility({ ...facility, "facType": e.target.value })} ><option value="Clinic">Clinic</option>  <option value="Hospital">Hospital</option></select><br></br>
          <label>Registration Number</label>  <input type="text" value={facility.regNumber} onChange={(e) => setFacility({ ...facility, "regNumber": e.target.value })}></input><br></br>
          <label>Email</label>  <input type="email" value={facility.email} onChange={(e) => setFacility({ ...facility, "email": e.target.value })}></input><br></br>
          <label>Working Hours</label>  <input type="number" value={facility.workHours} onChange={(e) => setFacility({ ...facility, "workHours": e.target.value })}></input><br></br>
          <label>Starting Patient Registration Number</label>  <input type="text" value={facility.startPatRegNum} onChange={(e) => setFacility({ ...facility, "regNumstartPatRegNumber": e.target.value })}></input><br></br>
          <label>Category</label>  <select value={facility.category} onChange={(e) => setFacility({ ...facility, "category": e.target.value })}><option value="Allopathy">Allopathy</option>  <option value="Homeopathy">Homeopathy</option></select><br></br>
          <label>Appoinment Type</label>  <select value={facility.appType} onChange={(e) => setFacility({ ...facility, "appType": e.target.value })}><option value="Clinic Level">Clinic Level</option>  <option value="Doctor Level">Doctor Level</option></select><br></br>
          <label>GST Number</label>  <input type="text" value={facility.gstNum} onChange={(e) => setFacility({ ...facility, "gstNum": e.target.value })}></input><br></br>
          <label>Address</label>  <textarea value={facility.address} onChange={(e) => setFacility({ ...facility, "address": e.target.value })}></textarea><br></br>
          <label>Logo</label>  <input name="logo" type="file" onChange={(e) => setFacility({ ...facility, "fileName": e.target.files[0] })}></input><br></br>
          <label>Previous Image</label> <img src={`http://localhost:5000/images/facilityimages/${facility.logo}`} alt="logo" className='facLogo' />

          <button type='submit'>Submit</button> &nbsp;  <button>Cancel</button>
        </form>
      </div>
    </>
  )
}

export default Editclinic
